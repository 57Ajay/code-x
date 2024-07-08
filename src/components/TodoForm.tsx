import { Fragment } from "react/jsx-runtime";
import Button from "./Button";
import { useState } from "react";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");

  return (
    <Fragment>

      <form 
        onSubmit={e => e.preventDefault()}
        
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

        <Button text="Add Todo" type="submit" buttonType="Primary" onClick={()=>void 0} />
            
      </form>

    </Fragment>
  );
};

export default TodoForm;
