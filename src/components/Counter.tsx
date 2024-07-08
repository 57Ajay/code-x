// import { useState } from "react";
import { Fragment } from "react/jsx-runtime"
import { useTodosContext } from "../contexts/useTodosContext";
const Counter = () => {
  const { todos } = useTodosContext();
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <Fragment>
        <p> 
          <b>{completedTodos.length}</b>/{todos.length} todo's completed 
        </p>
    </Fragment>
  );
};

export default Counter;