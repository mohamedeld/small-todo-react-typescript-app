import "./TodoList.css";
interface TodosProps {
  todos: { id: string; text: string }[];
  onDelete: (id: string) => void;
}
export default function TodoList({ todos, onDelete }: TodosProps) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
