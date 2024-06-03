import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ inputs, setInputs }) => {
  const navigate = useNavigate();

  const idChange = (event) => {
    setInputs({ ...inputs, id: event.target.value });
  };

  const resourceChange = (event) => {
    setInputs({ ...inputs, resource: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs({ ...inputs, resource: event.target.resource.value, id: event.target.id.value });
    navigate(`/${inputs.resource}/${inputs.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline p-3 border rounded bg-light">
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label htmlFor="resource" className="mr-2">Search for:</label>
        </div>
        <div className="col-auto">
          <select 
            name="resource" 
            id="resource" 
            onChange={resourceChange} 
            className="form-control mr-2"
            value={inputs.resource}
          >
            <option value="" disabled>Please select resource:</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
          </select>
        </div>
        <div className="col-auto">
          <label htmlFor="id" className="mr-2">ID:</label>
        </div>
        <div className="col-auto">
          <input 
            type="number" 
            name="id" 
            id="id" 
            onChange={idChange} 
            value={inputs.id} 
            className="form-control mr-2" 
            placeholder="Enter ID"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Search The Galaxy</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
