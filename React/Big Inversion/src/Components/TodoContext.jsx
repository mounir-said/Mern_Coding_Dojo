import React, { createContext, useReducer } from 'react';

const TodoContext = createContext();

const initialState = {
  tareas: JSON.parse(localStorage.getItem('tareas')) || []
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tareas: [...state.tareas, action.payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        tareas: state.tareas.map(tarea =>
          tarea.id === action.payload.id ? { ...tarea, state: !tarea.state } : tarea
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        tareas: state.tareas.filter(tarea => tarea.id !== action.payload.id)
      };
    default:
      return state;
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Persist state to localStorage
  React.useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(state.tareas));
  }, [state.tareas]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
