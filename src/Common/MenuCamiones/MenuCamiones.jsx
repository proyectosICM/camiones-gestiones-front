import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ItemCamion } from "./ItemCamion";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { camionesxhabilitados } from "../../API/apiurls";

export function MenuCamiones() {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol");
  const empresa = localStorage.getItem("empresa");
  const [camiones, setCamiones] = useState();
  localStorage.removeItem("dataCamion");
  const ListarCamiones = useListarElementos(
    `${camionesxhabilitados}${empresa}/1`,
    setCamiones
  );

  useEffect(() => {
    ListarCamiones();
  }, [ListarCamiones]);

  const handleBack = () => {
    navigate("/verificar-vehiculo");
  };
  const ca = 
    {
      id: 1,
      placa: "ABC-002"
    }

  return (
    <div className="entero">
      {rol === "CONDUCTOR" && (
        <Button variant="primary" onClick={handleBack}>
          Atras
        </Button>
      )}

      <h1>Lista de camiones</h1>
      <div className="menu">
        {camiones &&
          camiones.map((camion) => (
            <ItemCamion camion={camion} />
            ))}

         <ItemCamion key={ca.id} camion={ca} />   
      </div>
    </div>
  );
}
