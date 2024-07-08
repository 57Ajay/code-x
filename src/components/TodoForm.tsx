import { Fragment } from "react/jsx-runtime";
import Button from "./Button";

const TodoForm = () => {
  return (
    <Fragment>

      <form>

        <label htmlFor="todoInput" className="block text-[14px] mb-2">
        <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
        </label> 
        <input 
          type="text" 
          id="todoInput" /* Connect the label to the input*/
          className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full p-[16px]" 
        />

        <Button text="Add Todo" type="submit" buttonType="Primary" onClick={()=>void 0} />

      </form>

    </Fragment>
  );
};

export default TodoForm;
