import React from "react";
import { Button } from "react-bootstrap";
import { Logout } from "../Hooks/Logout";
import { useNavigate } from "react-router-dom";
import { MenuCamiones } from "../Common/MenuCamiones/MenuCamiones";

export function RevisarCheckListConductor() {
    const navigate = useNavigate();

  return (
    <>
      <h1>Seleccion el Vehiculo a evaluar o escanee el QR</h1>
        <MenuCamiones />
      <Button onClick={() => Logout(navigate)}>Salir</Button>
    </>
  );
}
