import { useState } from "react";

interface Props {
  onAddTodo: (title: string) => void;
}

const NewTodo = ({ onAddTodo }: Props) => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={submitForm}>
        Add todo
      </button>
    </form>
  );
};

export default NewTodo;
