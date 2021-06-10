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
  data_dodf: string;
  texto: string;
  id_ato: number;
  tipo_atos: number;
}

interface ProcessContextData {
  process: string;
  acts: ActsProps[];
  addNumberProcess(numberProcess: string): Promise<void>;
  loading: boolean;
}

const ProcessContext = createContext<ProcessContextData>(
  {} as ProcessContextData
);

export function ProcessProvider({ children }: ProcessProviderProps) {
  const [process, setProcess] = useState('');
  const [loading, setLoading] = useState(true);
  const [acts, setActs] = useState<ActsProps[]>([]);

  useEffect(() => {
    api.get(`/${process}`, {}).then((response) => {
      setActs(response.data.acts);
      setLoading(false);
    });
  }, [process]);

  async function addNumberProcess(contract: string) {
    setProcess(contract);
  }

  return (
    <ProcessContext.Provider
      value={{ process, loading, acts, addNumberProcess }}
    >
      {children}
    </ProcessContext.Provider>
  );
}

export function useProcess() {
  const context = useContext(ProcessContext);

  return context;
}
