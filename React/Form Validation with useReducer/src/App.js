import React from 'react';
import Form from './Components/FormReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <h1 className="text-center my-5">Form Validation with useReducer</h1>
            <Form />
        </div>
    );
}

export default App;
