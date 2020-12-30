import './App.css';
import React, { useState } from 'react';
  
function App() {
  // states
  const [input, setInput] = useState(""); // text field state
  const [messages, setMessages] = useState([]) // messages state stored in an array

  // set text field
  const setInputField = (event) => { 
    setInput(event.currentTarget.value);
  }

  // send message
  const sendMessage = (event) => {
    event.preventDefault(); // prevent refreshing
    setMessages(messages.concat(input)); // messages += new message
    setInput(""); // clear text field
  }
  
  return (
  <div className="App">

    {/* MESSAGE HISTORY */}
    <div className="message__history">{
        messages.map(message => ( //"message" variable is used to map all strings in "messages" array
        <p>{message}</p>
    ))
    }</div>

    {/* FORM */}
    <form className="form">
      {/* input field */}
      <input value={input} onChange={(event) => {setInputField(event, input)}}/>

      {/* send message button */}
      <button type="submit" onClick={sendMessage}>Send</button>
    </form>

  </div>
  );
}

export default App;
