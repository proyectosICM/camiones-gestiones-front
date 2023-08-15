import React from "react";
import { NavBar } from "./Common/NavBar";
import { Prueba2 } from "./prueba2";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ClCamiones } from "./CLCamiones";
import { SelecionarCamion } from "./SelecionarCamion";
import { camionesURL } from "./API/apiurls";
import { Historial } from "./Historial";

export function VerC() {
  const { params } = useParams();
  const [page, setPage] = useState();

  useEffect(() => {
    switch (params) {
      case "clcamion":
        setPage(<ClCamiones />);
        break;
      case "seleccione-camion":
        setPage(<SelecionarCamion tc="camion" url={camionesURL} />);
        break;
      case "seleccione-carreta":
        setPage(<SelecionarCamion tc="carreta" url={camionesURL} />);
        break;
      case "historial":
        setPage(<Historial tc="carreta" url={camionesURL} />);
        break;
      default:
        setPage(<Prueba2 />);
        break;
    }
  }, [params]);

  return (
    <div>
      <NavBar pr={page} />
    </div>
  );
}
