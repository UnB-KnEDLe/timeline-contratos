import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from 'react';
import api from '../services/api';
import { useProcess } from './useProcess';

interface ProcessProviderProps {
  children: ReactNode;
}

interface AdvancedSearchContextData {
  actType: number | any;
  dateOneInitial: string;
  dateTwoInitial: string;
  addDateOne(dateInitial: string): Promise<void>;
  addDateTwo(dateInitial: string): Promise<void>;
  pickIdAct(actIdType: number): void;
  addAdvancedSearch(
    processo: string,
    dateOne: any,
    dateTwo: any,
    tipo: any
  ): any;
}

const AdvancedSearchContext = createContext<AdvancedSearchContextData>(
  {} as AdvancedSearchContextData
);

export function AdvancedSearchProvider({ children }: ProcessProviderProps) {
  const [actType, setActType] = useState<number | any>();
  const { setActs, setLoading } = useProcess();
  const [dateOneInitial, setDateOneInitial] = useState('');
  const [dateTwoInitial, setDateTwoInitial] = useState('');

  async function addAdvancedSearch(
    processo?: string,
    dateOne?: any,
    dateTwo?: any,
    tipo?: any
  ) {
    await api
      .get(`/advanced_search`, {
        params: {
          ...(processo ? { n_processo: processo } : {}),
          ...(dateOne ? { start_date: dateOne } : {}),
          ...(dateTwo ? { end_date: dateTwo } : {}),
          ...(tipo ? { id_tipo: tipo } : {}),
        },
      })
      .then((response) => {
        if (response.data.acts.length === 0) {
          throw new Error('Erro ao buscar contrato');
        }
        setActs(response.data.acts);
        setLoading(false);
      });
  }

  function pickIdAct(actIdType: number) {
    setActType(actIdType);
  }

  const addDateOne = useCallback(async (dateInitial: string) => {
    setDateOneInitial(dateInitial);
  }, []);

  const addDateTwo = useCallback(async (dateInitial: string) => {
    setDateTwoInitial(dateInitial);
  }, []);

  return (
    <AdvancedSearchContext.Provider
      value={{
        actType,
        pickIdAct,
        addAdvancedSearch,
        dateOneInitial,
        dateTwoInitial,
        addDateOne,
        addDateTwo,
      }}
    >
      {children}
    </AdvancedSearchContext.Provider>
  );
}

export function useAdvancedSearch() {
  const context = useContext(AdvancedSearchContext);

  return context;
}
