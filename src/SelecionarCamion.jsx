import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useListarElementos } from "./Hooks/CRUDHook";
import { camionesURL } from "./API/apiurls";
import { useNavigate } from "react-router-dom";

export function SelecionarCamion({tc, url}) {
  const [camiones, setCamiones] = useState([]);
  const navigate = useNavigate();

  const ListarCamion = useListarElementos(url, setCamiones);

  useEffect(() => {
    ListarCamion();
  }, [ListarCamion]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Historial de camion</h1>
      <h3>Seleccione el camion para ver su historial</h3>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Tipo</th>
              <th>Ver historial</th>
            </tr>
          </thead>
          <tbody>
            {camiones.map((camion) => (
              <tr key={camion.id}>
                <td>{camion.id}</td>
                <td>{camion.placa}</td>
                <td>{camion.marcasModel.nombre}</td>
                <td>{camion.modeloModel.nombre}</td>
                <td>{camion.tiposCModel.nombre}</td>
                <td>
                  <Button onClick={() => navigate(`/ver/${'historial'}`)}> Ver </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
