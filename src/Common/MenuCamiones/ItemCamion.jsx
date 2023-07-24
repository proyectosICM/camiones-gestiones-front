import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ItemCamion({ camion }) {
  const navigate = useNavigate();

  const handleDetalles = () => {
    localStorage.setItem("dataCamion", camion.id);
    navigate("/camion-detalle");
  };
  return (
    <div className="item-Menu">
      <Card style={{ background: "#1B1D20", color: "#fff" }}>
        <Card.Body>
          <Card.Title>{camion.placa}</Card.Title>
          <Card.Text></Card.Text>
          <Button onClick={handleDetalles}>Seleccionar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
