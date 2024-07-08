import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
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
  // const savedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState<Todo[]>([]);
  // useEffect(() => {
  //   try{
  //     if (savedTodos) {
  //       setTodos(JSON.parse(savedTodos));
  //     } else {
  //         const fetchTodos = async()=>{
  //         const data = await fetch("https://bytegrad.com/course-assets/api/todos");
  //         const todos = await data.json();
  //         setTodos(todos);
  //         localStorage.setItem("todos", JSON.stringify(todos));
  //       };
  //       fetchTodos()
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;