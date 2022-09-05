import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos(() => [...todos, newTodo]); //  1 ?

    // setTodos((todos) => [...todos, newTodo]); // 2 ?

    // setTodos((prevTodos) => {
    //   return prevTodos.concat(newTodo); // 3 ?
    // });
  };
  const removeHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId); //??????????????????
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeHandler} />
    </div>
  );
}

export default App;
