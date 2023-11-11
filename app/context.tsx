'use client'
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of your context's state
interface GlobalContextState {
  globalVar: string;
  setGlobalVar: (value: string) => void;
}

// Create the context with a default value
export const GlobalContext = createContext<GlobalContextState>({
  globalVar: 'home',
  setGlobalVar: () => {},
});

// Define the type for the provider's props
interface GlobalProviderProps {
  children: ReactNode;
}

// Create the provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [globalVar, setGlobalVar] = useState<string>('initialValue');

  return (
    <GlobalContext.Provider value={{ globalVar, setGlobalVar }}>
      {children}
    </GlobalContext.Provider>
  );
};
