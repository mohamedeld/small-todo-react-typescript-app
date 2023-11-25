import { FormEvent, useRef } from "react";
import "./NewTodo.css";
interface AddTodoProp {
  onAddTodo: (text: string) => void;
}
export default function NewTodo({ onAddTodo }: AddTodoProp) {
  const todoInput = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const enteredInput = todoInput.current!.value;
    onAddTodo(enteredInput);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={todoInput} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
