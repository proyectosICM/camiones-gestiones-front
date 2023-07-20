import React from "react";
import { Tabla } from "../Common/CheckList/Tabla";

export function CheckListConductor() {

  const llantas = [
    "Revisar ajuste",
    "Cortes y averias",
    "Revisar Presion recomendada",
  ];

  const motor = [
    "Niveles de Motor",
    "Sistema de lubricacion de fugas",
    "Sistema de combustible",
  ];

  const sisElectrico = [
    "Luces  ",
    "Sistema de carga",
    "Mandos tablero",
    "Sistema de arranque",
    "Ruidos anormales",
    "Otros equipos electricos"
  ];

  const trasmision = [
    "Embrague",
    "Caja de cambio",
    "Diferencial",
    "Cardanes",
    "Ruidos Anormales"
  ];

  const direccion = [
    "Seryo",
    "Alineamiento",
    "Pines, bocinas, terminales",
    "Caja de Direcion"
  ];

  const frenos = [
    "Limpieza y regulacion",
    "Presion de aire",
    "Freno de estacionamiento"
  ];

  const suspension = [
    "Muelles, Bolsas de aire",
    "Amortiguadores",
    "Ejes barra estabilizadora"
  ];

  const cabina = [
    "Carroceria: Parabrisas, puertas, chapas, asientos",
    "Chasis: Tornamesas, Bastidor"
  ]

  return (
    <>
      <h1>Marque si esta en buen o en mal estado:</h1>
      <Tabla titulo="Llantas" datos={llantas} />
      <Tabla titulo="Motor" datos={motor} />
      <Tabla titulo="Sistema Electrico" datos={sisElectrico} />
      <Tabla titulo="Trasmision" datos={trasmision} />
      <Tabla titulo="Direccion" datos={direccion} />
      <Tabla titulo="Frenos" datos={frenos} />
      <Tabla titulo="Suspension" datos={suspension} />
      <Tabla titulo="Cabina" datos={cabina} />
    </>
  );
}
