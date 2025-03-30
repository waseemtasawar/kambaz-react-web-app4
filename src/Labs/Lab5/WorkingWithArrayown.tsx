import React, { useState, useEffect } from "react";

interface Todo {
  id: string;
  description: string;
  completed: boolean;
}
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER ;

export default function WorkingWithArrayown() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoId, setTodoId] = useState("1");
  const [newDescription, setNewDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const fetchTodos = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/todos`);
    const data = await response.json();
    setTodos(data);
  };

  const updateTodoDescription = async () => {
    const response = await fetch(
      `${REMOTE_SERVER}/lab5/todos/${todoId}/description/${newDescription}`, 
      {
        method: "PUT"
      }
    );
    const data = await response.json();
    setTodos(data);
  };

  const updateTodoCompleted = async () => {
    const response = await fetch(
      `${REMOTE_SERVER}/lab5/todos/${todoId}/completed/${completed}`, 
      {
        method: "PUT"
      }
    );
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const selectedTodo = todos.find(t => t.id === todoId);
    if (selectedTodo) {
      setNewDescription(selectedTodo.description);
      setCompleted(selectedTodo.completed);
    }
  }, [todoId, todos]);

  return (
    <div id="wd-working-with-arrays">
      <h3>Working With Arrays</h3>
      <h4>Todos</h4>
      <ul className="list-group mb-3">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className={`list-group-item ${todo.completed ? 'text-decoration-line-through' : ''}`}
            onClick={() => setTodoId(todo.id)}
            style={{cursor: 'pointer'}}
          >
            {todo.description}
          </li>
        ))}
      </ul>

      <div className="row">
        <div className="col-md-6">
          <h5>Edit Todo</h5>
          <div className="mb-3">
            <label className="form-label">Todo ID</label>
            <select 
              className="form-select"
              value={todoId}
              onChange={(e) => setTodoId(e.target.value)}
            >
              {todos.map(todo => (
                <option key={todo.id} value={todo.id}>{todo.id}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button 
              className="btn btn-warning mt-2"
              onClick={updateTodoDescription}
            >
              Update Description
            </button>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            <label className="form-check-label">
              Completed
            </label>
            <button 
              className="btn btn-warning mt-2 d-block"
              onClick={updateTodoCompleted}
            >
              Update Completed Status
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <h5>Current Todo</h5>
          <pre className="border p-3">
            {JSON.stringify(
              todos.find(t => t.id === todoId) || {}, 
              null, 2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}