import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


function App() {
  // Initialize the socket and store it in state
  const [socket] = useState(() => io('http://localhost:8000'));

  useEffect(() => {
    // Set up event listeners in useEffect
    console.log('Is this running?');
    socket.on('welcome', data => console.log(data));

    // Clean up by removing all listeners when the component unmounts
    return () => socket.removeAllListeners();
  }, [socket]);

  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
