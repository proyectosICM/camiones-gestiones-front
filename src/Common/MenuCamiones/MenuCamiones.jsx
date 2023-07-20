import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ItemCamion } from "./ItemCamion";

export function MenuCamiones() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/verificar-vehiculo");
  };

  return (
    <div className="entero">
      <Button variant="primary" onClick={handleBack}>
        Atras
      </Button>
      <h1>Lista de camiones</h1>
      <div className="menu">
        <ItemCamion placa = "ABC-002" />
        <ItemCamion placa = "AZT-J01" />
        <ItemCamion placa = "AC0-162" />
      </div>
    </div>
  );
}
