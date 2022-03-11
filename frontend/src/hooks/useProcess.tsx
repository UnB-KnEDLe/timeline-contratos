import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { api } from '../services/api';

interface ProcessProviderProps {
  children: ReactNode;
}

interface ActsProps {
  data_dodf: any;
  texto: string;
  id_ato: number;
  id_tipo: number;
  view: boolean;
  itensfracassados?: string;
  itensvencedores?: string;
  responsavelato?: string;
  empresa?: string;
  cnpj?: string;
  page?: number;
  contrato?: string;
  partes?: string;
  objeto?: string;
  valor?: string;
  lei_orc?: string;
  uni_orc?: string;
  prog_trab?: string;
  nat_desp?: string;
  nota_emp?: string;
  data_ass?: string;
  signatarios?: string;
  vigencia?: string;
}

interface ActTypesDicionary {
  [key: number]: string;
}

interface TypeActsProps {
  descricao: string;
  id_tipo: number;
}

interface ProcessContextData {
  acts: ActsProps[];
  typeActs: TypeActsProps[];
  setActs: React.Dispatch<React.SetStateAction<ActsProps[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addNumberProcess(contract: string): Promise<any>;
  addProcess(contract: string): Promise<any>;
  cleanActs(): Promise<void>;
  changeSearch(): Promise<void>;
  loading: boolean;
  process: string;
  search: boolean;
  actTypeDicionary: ActTypesDicionary;
}

const ProcessContext = createContext<ProcessContextData>(
  {} as ProcessContextData
);

export function ProcessProvider({ children }: ProcessProviderProps) {
  const [loading, setLoading] = useState(true);
  const [acts, setActs] = useState<ActsProps[]>([]);
  const [typeActs, setTypeActs] = useState<TypeActsProps[]>([]);
  const [process, setProcess] = useState('');
  const [search, setSearch] = useState(false);

  const addNumberProcess = useCallback(async (contract: string) => {
    await api.get(`/${contract}`, {}).then((response) => {
      if (response.data.acts.length === 0) {
        throw new Error('Erro ao buscar contrato');
      }
      setActs(response.data.acts);
      setLoading(false);
    });
  }, []);

  let actTypeDicionary: ActTypesDicionary = {};

  useEffect(() => {
    api.get(`types`).then((response) => {
      setTypeActs(response.data.data);
    });
  }, []);

  for (let i = 0; i < typeActs.length; i += 1) {
    actTypeDicionary[i] = typeActs[i].descricao;
  }

  const cleanActs = useCallback(async () => {
    setActs([]);
    setProcess('');
  }, []);

  const addProcess = useCallback(async (contract: string) => {
    setProcess(contract);
  }, []);

  const changeSearch = useCallback(async () => {
    setSearch(!search);
  }, [search]);

  return (
    <ProcessContext.Provider
      value={{
        loading,
        acts,
        addNumberProcess,
        setActs,
        cleanActs,
        addProcess,
        process,
        search,
        changeSearch,
        typeActs,
        setLoading,
        actTypeDicionary,
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
}

export function useProcess() {
  const context = useContext(ProcessContext);

  return context;
}
