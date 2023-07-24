import React from "react";
import { Button, Table } from "react-bootstrap";

export function Tabla({ titulo, datos }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div className="d-flex justify-content-center">
        <Table
          striped
          bordered
          hover
          style={{ width: "50%", alignItems: "center" }}
        >
          <thead>
            <th>{titulo}</th>
            <th>Opciones</th>
            <th>Estado</th>
          </thead>

          <tbody>
            {datos.map((c, index) => (
              <tr key={index}>
                <td>{c.nombre}</td>
                <td>
                  <Button variant="success">v</Button>
                  <Button variant="danger">x</Button>
                </td>
                <td>Seleccione</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
