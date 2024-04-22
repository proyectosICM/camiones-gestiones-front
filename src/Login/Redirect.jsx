import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Logout } from "../Hooks/Logout";
import { Button } from "react-bootstrap";
import { excelURL, infoURL } from "../API/apiurls";
import { useListarElementos } from "../Hooks/CRUDHook";
import axios from "axios";

export function Redirect() {
  const username = localStorage.getItem("Username");
  const navigate = useNavigate();

  const [infoData, setInfoData] = useState();

  const ListarInfo = useListarElementos(`${infoURL}${username}`, setInfoData);

  useEffect(() => {
    ListarInfo();
  }, [ListarInfo]);

  useEffect(() => {
    if (infoData) {
      console.log(infoData);
    }
  }, [infoData]);

  const handleLogout = () => {
    Logout(navigate);
  };

  useEffect(() => {
    if (infoData && infoData.empresasModel) {
      axios.get(`${excelURL}?id=${infoData.empresasModel.id}`, { responseType: 'blob' }) // Establece responseType como 'blob' para indicar que la respuesta es un archivo
        .then((response) => {
          // Crear un objeto URL para el archivo blob
          const url = window.URL.createObjectURL(new Blob([response.data]));
          // Crear un enlace <a> para descargar el archivo
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'archivo.xlsx'); // Nombre del archivo a descargar
          // Simular un clic en el enlace para iniciar la descarga
          document.body.appendChild(link);
          link.click();
          // Limpiar el objeto URL y eliminar el enlace después de la descarga
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error al obtener datos del servidor:", error);
        });
    }
  }, [infoData]);

  /*
  useEffect(() => {
    switch (rol) {
      case "CONDUCTOR":
        navigate('/verificar-vehiculo');
        break;
      case "MECANICO":
        navigate('/Home');
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
*/
  return (
    <>
      <h1>Descargando datos</h1>
      <Button variant="primary" onClick={handleLogout}>
        Cerrar
      </Button>
    </>
  );
}
