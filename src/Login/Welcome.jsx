import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Logout } from "../Hooks/Logout";
import { infoURL } from "../API/apiurls";
import { useListarElementos } from "../Hooks/CRUDHook";

export function Welcome() {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const username = localStorage.getItem("Username");
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");
  


  const handleLogout = () => {
    Logout(navigate);
  };

  const ListarInfo = useListarElementos(`${infoURL}${username}`, setInfo);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    ListarInfo();
    if (info !== undefined) {
      localStorage.setItem("rol", info.rolesModel.nombre);
      localStorage.setItem("empresa", info.empresasModel.id);
      localStorage.setItem("trabajador", info.id_tra);
    }
    if (rol !== null) {
      navigate("/redirect");
    }
  }, [ListarInfo, token, info, navigate, rol]);

  return (
    <>
      <h1>Bienvenido {username}</h1>
      {info && (
        <>
          <p>id de Empresa: {info.empresasModel.id}</p>
          <p>Empresa: {info.empresasModel.nombre}</p>
          <p>ID de rol: {info.rolesModel.nombre}</p>
          <p>Espera un segundo a ser redirigido</p>
          <p>
            Si no eres redirigido comunicate con el administrador de sistema
          </p>
        </>
      )}
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}
