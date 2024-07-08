import { Fragment } from "react/jsx-runtime";
import DeleteButton from "./DeleteButton";
// import { useState } from "react";
// import { initialData } from "../data/mockData";
import { useTodosContext } from "../contexts/useTodosContext";

const TodoLists = () => {
  const {todos, setTodos} = useTodosContext()

  const completedTodos = (index: number)=>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  
  return (
    <Fragment>
        <ul>
            {todos.length === 0 ? (
              <li className="flex h-full justify-center items-center font-semibold text-[#231d15] text-lg">Add A Todo</li>
            ):(null)}

            {todos.map((todo, index)=>
              <li className="flex justify-between items-center px-8 h-[50px] text-    [14px] cursor-pointer border-b border-black/[0.08]" key={todo.id}
              >

                <span className={`${todo.isCompleted ? "line-through text-slate-300" : ""  }`}
                onClick={()=>completedTodos(index)}
                >{todo.text}</span>

                <DeleteButton id = {todo.id} setTodos = {setTodos} />
                  
                </li>)
            }
              
            
        </ul>
    </Fragment>
  );
};

export default TodoLists;