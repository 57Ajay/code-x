import React, { createContext, useState, Dispatch, SetStateAction } from "react";
import { initialData } from "../data/mockData";

// Define the shape of a todo item
interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

// Define the shape of the context value
export interface TodosContextType {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

// Create the context with an initial value matching the expected shape
export const TodosContext = createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},
});

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(initialData);
  
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;