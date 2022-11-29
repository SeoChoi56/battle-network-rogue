import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import SignUp from './SignUp';
import LogIn from './LogIn';

function App() {

  const [user, setUser] = useState(null)
  const [needToRegister, setNeedToRegister] = useState(false);

  //Sets user after Login and Registering
  function onRegister(value) {
    setNeedToRegister(value);
  }

  function onLogin(user) {
    setUser(user);
  }

  //Checks for current user/persists user
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  //Logs Out
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(""));
  }


  //Render login/SignUp if not logged in, otherwise render app with data
  if (!user) {
    const startingComponent = needToRegister ?
      <SignUp onLogin={onLogin} onCancelClick={onRegister} />
      :
      <LogIn onLogin={onLogin} onRegisterClick={onRegister} />
    return startingComponent
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{user.username}</p>
          <button onClick={handleLogout}>LogOut</button>
        </header>
      </div>
    );
  }
}

export default App;
