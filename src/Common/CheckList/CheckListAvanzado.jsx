import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function CheckListAvanzado() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/CLConductor-detalle')}>Atras</Button>
      <Button onClick={() => navigate('/revisar-cheklist-conductor')}>Volver al menu</Button>
      <h1>CheckList Avazado</h1>
      
    </>
  );
}
