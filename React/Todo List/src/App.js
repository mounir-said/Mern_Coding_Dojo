import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  const [tareas, setTareas] = useState([]);
  
  useEffect(() => {
    const tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas){
      setTareas(tareas);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTareas = [
      ...tareas,
      {
        id: Date.now().toString(),
        tarea: e.target.tarea.value,
        state: false
      }
    ]

    setTareas(newTareas);
    e.target.tarea.value = "";
    localStorage.setItem('tareas', JSON.stringify(newTareas));
  }

  const handleCheck = (tarea) => {
    const newTareas = tareas.map((tareaItem) => {
      if(tareaItem.id === tarea.id){
        return {...tareaItem, state: !tareaItem.state}
      }
      return tareaItem;
    });
    setTareas(newTareas);
  }

  const handleDelete = (tarea) => {
    const newTareas = tareas.filter((tareaItem) => {
      return tareaItem.id !== tarea.id;
    });
    setTareas(newTareas);
    localStorage.setItem('tareas', JSON.stringify(newTareas));
   }

  return (
    <div className="container">
      <h1 className="mt-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input type="text" className="form-control" name='tarea' placeholder="Enter a new task" />
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
      <ul className="list-group">
        {
          tareas.map((tarea, index) => (
            <li key={tarea.id} className={`list-group-item ${tarea.state ? 'list-group-item-success' : ''}`}>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" onChange={() => handleCheck(tarea)} checked={tarea.state} id={`checkbox-${index}`} />
                <label className="form-check-label" htmlFor={`checkbox-${index}`}>{tarea.tarea}</label>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(tarea)}>Delete</button>
            </li>
          ))
        } 
      </ul>
    </div>
  );
}

export default App;
