import "./App.css";
// import { Provider } from "react-redux";

import { Provider } from "react-redux";
import todoStore from "./redux/store";
import Todo from "./components/Todo";

/*
// all actions
1.add todo
2.search action
3.all
4.completed
5.incomplete
6.toggle
7.delete
8.make completed

*/
function App() {
  return (
    <Provider store={todoStore}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
