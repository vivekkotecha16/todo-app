import React from "react";

import { useSelector } from "react-redux";

import TodoItems from "./TodoItems";
function TodoList() {
  const filterdTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const serchTerm = state.serchTerm;

    console.log({ todos, filter, serchTerm });

    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchSearch = todo.text?.includes(serchTerm);
      console.log({ matchFilter, matchSearch });
      return matchFilter && matchSearch;
    });
  });

  console.log({ filterdTodos });
  return (
    <>
      <ul>
        <li className="my-2 text-sm italic">All Your Notes Here...</li>
        {filterdTodos?.length > 0 &&
          filterdTodos.map((todo, index) => (
            <TodoItems key={index} index={index} todo={todo} />
          ))}
      </ul>
    </>
  );
}

export default TodoList;
