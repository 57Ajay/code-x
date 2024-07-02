import React, { createContext, useState } from 'react';

interface MyContextType {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }

const defaultValue: MyContextType = {
    state: 'Default State',
    setState: () => {}
  };
// Create a Context
const MyContext = createContext<MyContextType>(defaultValue);


const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState('Hello, World!');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
