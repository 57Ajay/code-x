import {  useContext } from 'react';
import { TodosContext, TodosContextType } from './TodosContextProvider';
export const useTodosContext = (): TodosContextType => {
    const context = useContext(TodosContext);
    if (context === undefined) {
      throw new Error('useTodosContext must be used within a TodosContextProvider');
    }
    return context;
};