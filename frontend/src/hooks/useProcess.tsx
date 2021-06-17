import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
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
  acts: ActsProps[];
  addNumberProcess(contract: string): any;
  cleanActs(): Promise<void>;
  loading: boolean;
}

const ProcessContext = createContext<ProcessContextData>(
  {} as ProcessContextData
);

export function ProcessProvider({ children }: ProcessProviderProps) {
  const [loading, setLoading] = useState(true);
  const [acts, setActs] = useState<ActsProps[]>([]);

  async function addNumberProcess(contract: string) {
    await api.get(`/${contract}`, {}).then((response) => {
      setActs(response.data.acts);
      setLoading(false);
      const tam = acts.length;
      return tam;
    });
  }

  const cleanActs = useCallback(async () => {
    setActs([]);
  }, []);

  return (
    <ProcessContext.Provider
      value={{ loading, acts, addNumberProcess, cleanActs }}
    >
      {children}
    </ProcessContext.Provider>
  );
}

export function useProcess() {
  const context = useContext(ProcessContext);

  return context;
}
