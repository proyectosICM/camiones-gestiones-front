import React from "react";
import { Logout } from "../Hooks/Logout";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function VerificarVehiculo() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout(navigate);
  };

  return (
    <>
      <h1>Verifique el vehiculo a usar con el QR</h1>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}
