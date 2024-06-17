import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const Chat = () => {
    const [socket] = useState(() => io('http://localhost:8000'));
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const chatBoxRef = useRef(null);

    useEffect(() => {
        console.log('Is this running?');
        
        socket.on('welcome', (data) => console.log(data));

        // Listen for incoming chat messages
        socket.on('chatMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Listen for chat history
        socket.on('chatHistory', (history) => {
            setMessages(history);
        });

        // Clean up by removing all listeners when the component unmounts
        return () => socket.removeAllListeners();
    }, [socket]);

    useEffect(() => {
        // Scroll to bottom whenever messages change
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = { text: newMessage, timestamp: new Date().toISOString(), username };
            socket.emit('chatMessage', message);
            setNewMessage('');
        }
    };

    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            localStorage.setItem('username', username);
            socket.emit('join', username);
        }
    };

    if (!username) {
        return (
            <div className="chat-container">
                <form onSubmit={handleUsernameSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button type="submit">Join Chat</button>
                </form>
            </div>
        );
    }

    return (
        <div className="chat-container">
            <h1>Socket Chat App</h1>
            <div className="chat-box" ref={chatBoxRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.system ? 'system-message' : ''}`}>
                        {msg.system ? msg.text : `${msg.username}: ${msg.text}`}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
