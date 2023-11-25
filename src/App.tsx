import { useState } from "react";
import { Todo } from "./todo.model";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./App.css";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: new Date().toISOString(), text },
    ]);
  };
  const deleteHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };
  return (
    <>
      <NewTodo onAddTodo={todoHandler} />
      <TodoList todos={todos} onDelete={deleteHandler} />
    </>
  );
}

export default App;
