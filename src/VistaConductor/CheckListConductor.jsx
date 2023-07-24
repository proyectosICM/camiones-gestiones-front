import React, { useState } from "react";
import { Tabla } from "../Common/CheckList/Tabla";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { tables } from "../Common/CheckList/clcConductor";

export function CheckListConductor() {
  const navigate = useNavigate();
  const [currentTable, setCurrentTable] = useState(0);

  const handleDetails = () => {
    navigate('/camion-detalle');
  }

  const handleBack = () => {
    if (currentTable > 0) {
      setCurrentTable(currentTable - 1);
    }
  };

  const handleNext = () => {
    if (currentTable < tables.length - 1) {
      setCurrentTable(currentTable + 1);
    }
  };

  return (
    <>
      <Button onClick={handleDetails}>Atras</Button>
      <h1>Marque si esta en buen o en mal estado:</h1>
      <Tabla titulo={tables[currentTable].titulo} datos={tables[currentTable].datos} />
      <Button onClick={handleBack} disabled={currentTable === 0}>Anterior</Button>
      <Button onClick={handleNext} disabled={currentTable === tables.length - 1}>Siguiente</Button>

    </>
  );
}