import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "./Hooks/CRUDHook";
import { RGSURL } from "./API/apiurls";
import { useEffect } from "react";

export function Historial() {
  const navigation = useNavigate();
  const [rgs, setRgs] = useState();

  const ListarDatos = useListarElementos(RGSURL, setRgs);

  useEffect(() => {
    ListarDatos();
  }, [ListarDatos]);

  console.log(rgs);

  const headerStyle = {
    background: "black",
    color: "white",
    fontWeight: "bold",
  };

  const nissanCellStyle = {
    background: "#5DADE2",
    color: "white",
  };

  const greenCellStyle = {
    background: "white",
    color: "black",
  };

  return (
    <div>
      <Button onClick={() => navigation(`/ver/${"seleccione-camion"}`)}>
        Atras
      </Button>
      <h1>Historial</h1>
      <div className="tabla-larga">
        <Table striped bordered hover>
          <thead>
            <tr style={headerStyle}>
              <th style={headerStyle}>id</th>
              <th style={headerStyle}>Fecha de ingreso</th>
              <th style={headerStyle}>Hora Ingreso</th>
              <th style={headerStyle}>Fecha de inicio de Proceso</th>
              <th style={headerStyle}>Hora de inicio de Proceso</th>
              <th style={headerStyle}>Fecha de fin de Proceso</th>
              <th style={headerStyle}>Hora de fin de Proceso</th>

              <th style={headerStyle}>Placa Tracto</th>
              <th style={headerStyle}>Kilometraje Tracto</th>
              <th style={headerStyle}>Unidad Programada</th>

              <th style={headerStyle}>Placa Carreta</th>
              <th style={headerStyle}>Kilometraje Carreta</th>
              <th style={headerStyle}>Unidad Programada</th>

              <th style={headerStyle}>Actividades</th>

              <th style={headerStyle}>Estatus tracto</th>
              <th style={headerStyle}>Estatus carreta</th>

              <th style={headerStyle}>Trabajos pendientes</th>

              <th style={headerStyle}>Observaciones</th>

              <th style={headerStyle}>Repuestos utilizados</th>

              <th style={headerStyle}>Tecnico 1</th>
              <th style={headerStyle}>Tecnico 2</th>
              <th style={headerStyle}>Tecnico 3</th>

              <th style={headerStyle}>Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {rgs?.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>01/01/2022</td>
                <td>12:05</td>
                <td>01/01/2022</td>
                <td>12:05</td>
                <td>01/01/2022</td>
                <td>12:05</td> 
                <td>{dato.checkListCamionModel?.camionesModel.placa}</td>
                <td>{dato?.kilometrajeCamion}</td>
                <td>-</td>
                <td>{dato.checkListCarretaModel?.camionesModel.placa}</td>
                <td>{dato?.kilometrajeCarreta}</td>
                <td>-</td>
                <td>Revision expres correcta</td>
                <td>Operativo</td>
                <td>Operativo</td>
                <td>0</td>
                <td>-</td>
                <td>0</td>
                <td>0001</td>
                <td>0002</td>
                <td>0003</td>
                <td>025</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
