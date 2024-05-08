import React from "react";
import {
  markCompleted,
  markInComplete,
  removeTodo,
  toogleTodo,
} from "../redux/actions";
import {
  FaCheck,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
function TodoItems({ todo, index }) {
  const dispatch = useDispatch();

  return (
    <li
      key={index.toString()}
      className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4"
    >
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo?.completed ? "line-through text-red-500" : ""
          }`}
        >
          {todo?.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          onClick={() => dispatch(toogleTodo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded"
        >
          {todo?.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 rounded"
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            onClick={() => dispatch(markCompleted(index))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded"
          >
            <FaCheck />
          </button>
        )}

        {todo.completed && (
          <button
            onClick={() => dispatch(markInComplete(index))}
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 rounded"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItems;
