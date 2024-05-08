import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SERACH_TERM,
} from "./actionTypes";

//(text) =>({})  - because you need to return somthing so () and return obj so ({})
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toogleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markInComplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filteredTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSerachTerm = (searchTerm) => ({
  type: UPDATE_SERACH_TERM,
  payload: { searchTerm },
});
