import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Logout } from "../Hooks/Logout";
import { infoURL } from "../API/apiurls";
import axios from "axios";

export function Welcome() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout(navigate);
  };
  const username = localStorage.getItem("Username");
  const token = localStorage.getItem("token");

  const [info, setInfo] = useState();
  const rol = localStorage.getItem("rol");

  const ListarInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${infoURL}${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInfo(response.data);
      localStorage.setItem("rol", response.data.rolesModel.nombre);
      localStorage.setItem("empresa", response.data.empresasModel.id_emp);
      localStorage.setItem("trabajador", response.data.id_tra);
    } catch (error) {
      // Manejo de errores
      console.log(error);
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    ListarInfo();

    if(rol != undefined ){
      navigate('/redirect');
    }
  }, [ListarInfo, token, info]);

  return (
    <>
      <h1>Bienvenido {username}</h1>
      {info && (
        <>
          <p>id de Empresa: {info.empresasModel.id}</p>
          <p>Empresa: {info.empresasModel.nombre}</p>
          <p>ID de rol: {info.rolesModel.nombre}</p>
        </>
      )}
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}
