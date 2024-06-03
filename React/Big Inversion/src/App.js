


import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TodoProvider, TodoContext } from './Components/TodoContext';

function TodoList() {
  const { state, dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      tarea: e.target.tarea.value,
      state: false
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    e.target.tarea.value = '';
  };

  const handleCheck = (tarea) => {
    dispatch({ type: 'TOGGLE_TODO', payload: tarea });
  };

  const handleDelete = (tarea) => {
    dispatch({ type: 'DELETE_TODO', payload: tarea });
  };

  return (
    <div className="container">
      <h1 className="mt-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input type="text" className="form-control" name="tarea" placeholder="Enter a new task" />
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
      <ul className="list-group">
        {state.tareas.map((tarea, index) => (
          <li key={tarea.id} className={`list-group-item ${tarea.state ? 'list-group-item-success' : ''}`}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={() => handleCheck(tarea)}
                checked={tarea.state}
                id={`checkbox-${index}`}
              />
              <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                {tarea.tarea}
              </label>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(tarea)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
