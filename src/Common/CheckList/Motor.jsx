import React from "react";
import { Tabla } from "./Tabla";

export function Motor() {
  const cab = [
    "Niveles de Motor",
    "Sistema de lubricacion de fugas",
    "Sistema de combustible",
  ];
  return (
    <>
    <Tabla titulo='Motor' datos = {cab}  />
    </>
  );
}
