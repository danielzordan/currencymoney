import { useEffect, useState, createContext, ReactNode } from 'react';
import { CurrencyProps, CurrencyLabelProps } from './components/Currency'; 
import { api } from './api';

type resultProp = {
  [key: string]: CurrencyProps | string;
  source: string;
};

interface IFinanceProvider {
  source: string;
  currencies: CurrencyLabelProps[];
}

interface FinanceProviderProps {
  children: ReactNode;
}

export const FinanceContext = createContext<IFinanceProvider>({
  source: '',
  currencies: [],
});

export function FinanceProvider({ children }: FinanceProviderProps) {
  const [finance, setFinance] = useState<IFinanceProvider>({  
    source: '',
    currencies: [],
  });

  useEffect(() => {
    const result: resultProp = api.results.currencies;
    const resultParsed = Object.keys(result)
      .filter((key) => key !== 'source')
      .map((key) => ({ ...(result[key] as object), label: key}));
    
    const newFinance: IFinanceProvider = {
      source: result.source,
      currencies: resultParsed as CurrencyLabelProps[],
    }
    
    setFinance(newFinance);
  }, []);

  return (
    <FinanceContext.Provider value={finance} >
      {children}
    </FinanceContext.Provider>
  )
}