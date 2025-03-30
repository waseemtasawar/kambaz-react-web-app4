import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  editing?: boolean;
}

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  // Add removeTodo function back
  const removeTodo = async (todo: Todo) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };

  const createTodo = async () => {
    const newTodos = await client.createTodo();
    setTodos(newTodos);
  };

  const postTodo = async () => {
    const newTodo = await client.postTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const editTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t))
    );
  };

  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, todo: Todo) => {
    if (e.key === "Enter") {
      updateTodo(todo);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex align-items-center"
          >
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({
                  ...todo,
                  completed: e.target.checked,
                })
              }
            />

            {todo.editing ? (
              <input
                className="form-control w-50 me-2"
                value={todo.title}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...todo, title: e.target.value } : t
                    )
                  )
                }
                onKeyDown={(e) => handleKeyDown(e, todo)}
                onBlur={() => updateTodo(todo)}
                autoFocus
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  flexGrow: 1,
                }}
              >
                {todo.title}
              </span>
            )}

            <div className="ms-auto">
              <FaPencil
                onClick={() => editTodo(todo)}
                className="text-primary me-2"
              />
              {/* Keep both delete options if needed */}
              <TiDelete
                onClick={() => deleteTodo(todo)}
                className="text-danger me-2 fs-3"
                id="wd-delete-todo"
              />
              <button
                onClick={() => removeTodo(todo)}
                className="btn btn-sm btn-link text-danger p-0"
                aria-label="Remove todo"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
