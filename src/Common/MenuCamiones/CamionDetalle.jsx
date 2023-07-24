import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { camionesURL } from "../../API/apiurls";
import { VerChecklist } from "./../../VistaMecanico/VerCheckList";

export function CamionDetalle() {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol");
  const dataCamion = localStorage.getItem("dataCamion");

  const [camion, setCamion] = useState();
  const ListarCamion = useListarElementos(
    `${camionesURL}/${dataCamion}`,
    setCamion
  );

  useEffect(() => {
    ListarCamion();
  }, [ListarCamion]);

  const handleBack = () => {
    localStorage.removeItem("dataCamion");

    switch (rol) {
      case "CONDUCTOR":
        navigate("/verificar-vehiculo");
        break;
      case "MECANICO":
        navigate("/revisar-cheklist-conductor");
        break;
      default:
        console.log("Error");
        break;
    }
  };

  const handleCheckList = () => {
    navigate("/checklist-conductor");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleBack}>
        Atras
      </Button>
      {camion ? (
        <>
          <h1>Placa: {camion.placa} </h1>
          <h1>Marca: {camion.marcasModel.nombre}</h1>
          <h1>Modelo: {camion.modeloModel.nombre}</h1>
        </>
      ) : (
        <>
          <h1>Cargando...</h1>
        </>
      )}

      {rol === "CONDUCTOR" ? (
        <Button variant="primary" onClick={handleCheckList}>
          Realizar CheckList
        </Button>
      ) : (
        <>
          <VerChecklist />
          {/*
           <Button onClick={() => navigate("/checklist-avanzado")}>Realizar CheckList Avanzado</Button>
 */}
        </>
      )}
    </div>
  );
}
