import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "../Hooks/CRUDHook";
import { checkListxcamionURL } from "../API/apiurls";

export function VerChecklist() {
  const dataCamion = localStorage.getItem("dataCamion");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/camion-detalle");
  };

  const [CLConductor, setCLConductor] = useState();

  const ListarCLConductor = useListarElementos(
    `${checkListxcamionURL}${dataCamion}`,
    setCLConductor
  );

  useEffect(() => {
    ListarCLConductor();
  }, [ListarCLConductor]);

  const CLCDeta = (dato) => {
    localStorage.setItem("dataCamionDeta", dato )
    navigate('/CLConductor-detalle');
  };

  return (
    <>
      <Button variant="primary" onClick={handleBack}>
        Atras
      </Button>
      <h1>sds</h1>
      <Table striped bordered hover>
        <thead>
          <th>Dia</th>
          <th>Hora</th>
          <th>Placa</th>
          <th>Opcion</th>
        </thead>
        <tbody>
          {CLConductor &&
            CLConductor.map((clc) => (
              <tr>
                <td>22/05/55</td>
                <td>03:15</td>
                <td>{clc.camionesModel.placa}</td>
                <td>
                  <Button variant="primary" onClick={() => CLCDeta(clc.id)}>Ver Cheklist de Conductor</Button>
                  <Button variant="success">Realizar Cheklist avanzado</Button>
                </td>
              </tr>
            ))}
          <tr></tr>
        </tbody>
      </Table>
    </>
  );
}
