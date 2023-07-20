import React from "react";
import { Logout } from "../Hooks/Logout";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import QRScanner from "../Common/QRScanner";

export function VerificarVehiculo() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout(navigate);
  };

  const handleSelectCamion = () => {
    navigate('/menu-camiones')
  };

  return (
    <>
      <h1>Verifique el vehiculo a usar con el QR</h1>
      <QRScanner />

      <Button variant="primary">Simular lectura de QR</Button>
      <Button variant="primary" onClick={handleSelectCamion}>Seleccionar un bus de la lista</Button>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar Sesion
      </Button>
    </>
  );
}
