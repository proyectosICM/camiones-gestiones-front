import React, { useEffect } from "react";


import { useNavigate } from "react-router-dom";
import { Logout } from "../Hooks/Logout";
import { Button } from "react-bootstrap";



export function Redirect() {

  const rol = localStorage.getItem('rol');
  const navigate = useNavigate();


  const handleLogout = () => {
    Logout(navigate);
  };

  useEffect(() => {
    switch (rol) {
      case "CONDUCTOR":
        navigate('/verificar-vehiculo');
        break;
      case "MECANICO":
        navigate('/revisar-cheklist-conductor');
        break;
      case "ADMINISTRADOR":
        navigate('/verificar-vehiculo');
        break;
      case "SISTEMAS":
        navigate('/verificar-vehiculo');
        break;
      default:
        navigate('/verificar-vehiculo');
        break;
    }

  }, [rol, navigate]);

console.log(rol);
  return (
    <>
      <h1>Redirigiendo {rol}</h1>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}