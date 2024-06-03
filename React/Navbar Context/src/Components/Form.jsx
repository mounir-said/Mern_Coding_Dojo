import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Form = () => {
    const { setName } = useContext(UserContext);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <form>
            <label htmlFor="">Your Name :</label>
            <input type="text" placeholder="Enter your name" onChange={handleChange} />
        </form>
    );
};

export default Form;
