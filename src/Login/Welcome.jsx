import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Logout } from "../Hooks/Logout";

export function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout(navigate);
  };
  return (
    <>
      <h1>Bienvenido</h1>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}
