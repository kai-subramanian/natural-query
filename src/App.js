// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);

    // Call your API here. Replace 'your-api-endpoint' with your actual API endpoint.
    try {
      const response = await fetch('http://127.0.0.1:8000/query_processor/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({query:userInput}),
      });

      const data = await response.json();
      data.forEach(element => {
        const botMessage = { sender: 'bot', text: element };  
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      });
      // const botMessage = { sender: 'bot', text: data };

      
    } catch (error) {
      console.error('Error fetching API:', error);
      const errorMessage = { sender: 'bot', text: 'There was an error processing your request.'+error };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setUserInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
