import React from 'react';
import { UserProvider } from './UserContext';

const Wrapper = ({ children }) => {
    return <UserProvider>{children}</UserProvider>;
};

export default Wrapper;
