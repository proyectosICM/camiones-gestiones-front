import React, { useState } from "react";
import { Tabla } from "../Common/CheckList/Tabla";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { tables } from "../Common/clcConductor";

export function CheckListConductor() {
  const navigate = useNavigate();
  const [currentTable, setCurrentTable] = useState(0);
/*
  const tables = [
    {
      titulo: "Llantas",
      datos: [
        "Revisar ajuste",
        "Cortes y averias",
        "Revisar Presion recomendada",
      ],
    },
    {
      titulo: "Motor",
      datos: [
        "Niveles de Motor",
        "Sistema de lubricacion de fugas",
        "Sistema de combustible",
      ],
    },
    {
      titulo: "Sistema Electrico",
      datos: [
        "Luces",
        "Sistema de carga",
        "Mandos tablero",
        "Sistema de arranque",
        "Ruidos anormales",
        "Otros equipos electricos",
      ],
    },
    {
      titulo: "Trasmision",
      datos: [
        "Embrague",
        "Caja de cambio",
        "Diferencial",
        "Cardanes",
        "Ruidos Anormales",
      ],
    },
    {
      titulo: "Direccion",
      datos: [
        "Seryo",
        "Alineamiento",
        "Pines, bocinas, terminales",
        "Caja de Direcion",
      ],
    },
    {
      titulo: "Frenos",
      datos: [
        "Limpieza y regulacion",
        "Presion de aire",
        "Freno de estacionamiento",
      ],
    },
    {
      titulo: "Suspension",
      datos: [
        "Muelles, Bolsas de aire",
        "Amortiguadores",
        "Ejes barra estabilizadora",
      ],
    },
    {
      titulo: "Cabina",
      datos: [
        "Carroceria: Parabrisas, puertas, chapas, asientos",
        "Chasis: Tornamesas, Bastidor",
      ],
    },
  ]; 
  */
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