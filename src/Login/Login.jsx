import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import './Login.css';
import { base } from "../API/apiurls";

const axiosInstance = axios.create({
  baseURL: base,
  withCredentials: true,
});

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", {
        username,
        password,
      });
      setError("");
      const { token, Username } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("Username", Username);
      navigate("/welcome");
    } catch (error) {
      setError("Error en la autenticación");
      console.log(error);
    }
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/redirect");
    }
  }, [navigate]);



  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <h1>
          <FaUserCircle />
        </h1>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Iniciar sesión
          </Button>
        </Form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
