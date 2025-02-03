import Todo from "../models/todo";

interface Props {
  todos: Todo[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TodoList = ({ todos, onDelete, onComplete }: Props) => {
  return (
    <div>
      <h1> todo list </h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo._id}>
            {todo.title}
            {todo.date}
            <button
              className="btn btn-outline-danger m-2 rounded-pill"
              onClick={() => onComplete(todo._id)}
            >
              {todo.completed ? "Completed" : "Not completed"}
            </button>

            <button
              className="btn btn-outline-danger m-2 rounded-pill"
              onClick={() => onDelete(todo._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
