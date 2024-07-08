import { Fragment } from "react/jsx-runtime";
import Button from "./Button";
import { useState } from "react";
import { useTodosContext } from "../contexts/useTodosContext";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
const TodoForm = () => {
  const { isAuthenticated } = useKindeAuth();
  
  const [todoText, setTodoText] = useState("");
  const { todos, setTodos } = useTodosContext();

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isAuthenticated){
      return(
        alert("You must be logged in to add a todo")
      );
    }
          // check for duplicate todo
    if(todos.some(todo => todo.text.toLocaleLowerCase() === todoText.toLocaleLowerCase())){
      alert("Todo already exists");
      setTodoText("");
      return;
    }
          // check for empty todo
    if(todoText.trim() === ""){
      return;
    }
    setTodos([
      ...todos,
      {
        text: todoText,
        isCompleted: false,
        id: Math.random()+todos.length,
      },
      ]);
      setTodoText("");
  };

  return (
    <Fragment>

      <form 
        onSubmit={formSubmitHandler}
        
        >

        <label htmlFor="todoInput" className="block text-[14px] mb-2">
        <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
        </label> 
        <input 
          type="text" 
          id="todoInput" /* Connect the label to the input*/
          className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full p-[16px]" 
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />

        <Button text="Add Todo" type="submit" buttonType="Primary" />
            
      </form>

    </Fragment>
  );
};

export default TodoForm;
