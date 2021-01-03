import "../styles/Login.css";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import "firebase/auth";
import db from "../components/Database";

// login / create user

function Login() {
  const [username, setUsername] = useState(""); // username field state
  const [password, setPassword] = useState(""); // password field state

  // set username field
  const setUsernameField = (event) => {
    setUsername(event.currentTarget.value);
  };

  // set password field
  const setPasswordField = (event) => {
    setPassword(event.currentTarget.value);
  };

  const StartLogin = (event) => {
    console.log("Disabling refresh");
    event.preventDefault(); // prevent refreshing

    // check if user exists
    db.collection("users").onSnapshot((snapshot) => {
      console.log("Checking if user exists");

      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data() }));

      console.log("Searching database for: " + username);
      for (var i = 0; i < postData.length; i++) {
        let user = postData[i].username.username;
        let pass = postData[i].password.password;

        console.log(user);
        console.log(pass);
        if (user === username) {
          console.log("Found matching username. Checking password...");

          if (pass === password) {
            console.log("Password matches. User exists.");

            return;
          }
        }

        if (i === postData.length - 1) {
          console.log("User does not exist");
          // if user doesn't exist
        }
      }
    });
  };

  return (
    <div className="login__container">
      <div className="login__title">Welcome</div>

      <form>
        <div className="login">
          <TextField
            className="username"
            required
            label="Username"
            id="standard-required"
            onChange={(event) => setUsernameField(event, username)}
          />
          <TextField
            className="password"
            id="standard-password-input"
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(event) => setPasswordField(event, password)}
          />
          <Button
            className="submit"
            variant="contained"
            color="primary"
            onClick={(event) => StartLogin(event)}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
