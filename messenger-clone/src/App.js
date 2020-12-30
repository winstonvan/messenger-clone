import "./App.css";
import History from "./components/History";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function App() {
  // states
  const [input, setInput] = useState(""); // text field state
  const [messages, setMessages] = useState([]); // messages state stored in an array

  // set text field
  const setInputField = (event) => {
    setInput(event.currentTarget.value);
  };

  // send message
  const sendMessage = (event) => {
    event.preventDefault(); // prevent refreshing
    setMessages(messages.concat(input)); // messages += new message
    setInput(""); // clear text field
  };

  return (
    <div className="App">
      {/* MESSAGE HISTORY */}

      <div className="message__history">
        {messages.map((
          message //"message" variable is used to map all strings in "messages" array
        ) => (
          <History value={message} />
        ))}
      </div>

      {/* FORM */}
      <form className="form">
        <FormControl className="form__control">
          <InputLabel className="label">Aa</InputLabel>
          <Input
            className="input"
            value={input}
            onChange={(event) => {
              setInputField(event, input);
            }}
          />
          <IconButton
            size="small"
            variant="contained"
            disabled={!input}
            type="submit"
            onClick={sendMessage}
            className="icon"
            style={{
              borderRadius: 0,
            }}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
