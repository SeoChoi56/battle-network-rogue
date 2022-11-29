import { useState } from 'react'

function LogIn({onLogin, onRegisterClick}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function registerClick() {
        onRegisterClick(true)
    }

    function handleLogin(event) {
        event.preventDefault();
        const user = {
            username,
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(onLogin)
                } else {
                    res.json().then(event => alert(event.error))
                }
            })
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
            <button type="button" onClick={registerClick}>Register</button>
        </form>
    );
}

export default LogIn