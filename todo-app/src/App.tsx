import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import todoService from "./services/todoService";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    const todos = await todoService.getAll();
    setTodos(todos);
  };

  const deleteTodo = async (id: string) => {
    await todoService.delete(id);
    loadTodos();
  };

  const completeTodo = async (id: string) => {
    await todoService.complete(id);
    loadTodos();
  };

  const addTodo = async (title: string) => {
    await todoService.create(title);
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo} />
    </>
  );
}

export default App;
