import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import Textbox from "../components/Textbox";

type AuthData = {
  authenticated: boolean;
  username: string;
};

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      setAuth({ authenticated: true, username: username });
      localStorage.setItem(
        "authData",
        JSON.stringify({ authenticated: true, username })
      );
      navigate("/registration-form");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  useEffect(() => {
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      const parsedAuthData = JSON.parse(storedAuthData) as AuthData;
      setAuth(parsedAuthData);
    }
  }, [setAuth]);

  if (auth.authenticated) {
    navigate("/registration-form");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <Textbox label="Username" value={username} onChange={setUsername} />
      <Textbox
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Button onClick={handleLogin}>Login</Button>
      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
    </div>
  );
};

export default LoginScreen;
