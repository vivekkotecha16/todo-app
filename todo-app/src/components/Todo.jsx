import React, { useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSerachTerm } from "../redux/actions";
import FilterButtons from "./FilterButtons";
import TodoList from "./TodoList";
function Todo() {
  const dipatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [serchTerm, setSerchTerm] = useState("");

  const handleAddTodoClick = () => {
    if (newTodoText.trim()) {
      dipatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    } else {
    }
  };

  const handleSerachTerm = (search) => {
    setSerchTerm(search);
    dipatch(updateSerachTerm(search.trim()));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APPER
      </h2>

      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 bprder-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          // disabled={!newTodoText.trim()}
          onClick={handleAddTodoClick}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <BsPlusLg />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            value={serchTerm}
            onChange={(e) => handleSerachTerm(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className="flex-grow p-2 bprder-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            // disabled={!newTodoText.trim()}
            // onClick={handleAddTodoClick}
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <BsSearch />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
}

export default Todo;
