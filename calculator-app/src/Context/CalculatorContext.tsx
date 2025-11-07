import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';


interface CalculatorContextType {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};

interface CalculatorProviderProps {
  children: ReactNode;
}
export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children }) => {
  const [input, setInput] = useState<string>('');

  return (
    <CalculatorContext.Provider value={{ input, setInput }}>
      {children}
    </CalculatorContext.Provider>
  );
};
