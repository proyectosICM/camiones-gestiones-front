import React, { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";
import { Logout } from "../Hooks/Logout";
import { Button } from "react-bootstrap";
import { Login } from "./Login";


export function Redirect() {

  const rol = localStorage.getItem('rol');
  const navigate = useNavigate();
  const empresa = localStorage.getItem('empresa');


  const handleLogout = () => {
    Logout(navigate);
  };

  useEffect(() => {
    let tempNav;
    switch (rol) {
      case "CONDUCTOR":
        navigate('/verificar-vehiculo');
        break;
      case "SUPERVISOR":
        tempNav = `/menuCamion/${empresa}`;
        break;
      case "ADMINISTRADOR":
        tempNav = "/welcomeAdd";
        break;
      case "SISTEMAS":
        tempNav = "/welcomeasis";
        break;
      default:
        tempNav = '/';
        break;
    }

  }, [rol]);


  return (
    <>
      <h1>Redirigiendo {rol}</h1>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}