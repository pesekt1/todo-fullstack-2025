import axios from "axios";
import Todo from "../models/todo";

class TodoService {
  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  async getAll() {
    const response = await this.http.get<Todo[]>("/todos");
    return response.data;
  }

  async create(title: string) {
    const response = await this.http.post<Todo>("/todos", { title: title });
    return response.data;
  }

  async complete(id: string) {
    const response = await this.http.put<Todo>(`/todos/${id}/complete`);
    return response.data;
  }

  async delete(id: string) {
    await this.http.delete(`/todos/${id}`);
  }
}

export default new TodoService();
