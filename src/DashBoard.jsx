import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { checkListURL } from './API/apiurls';

export function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="camionesMenu-contenedor">
      <Card className="item-Menu">
        <h1>Ver historial de camiones</h1>
        <Button onClick={() => navigate(`/ver/${"seleccione-camion"}`)}>IR</Button>
      </Card>

      <Card className="item-Menu">
        <h1>Ver historial de carretas</h1>
        <Button onClick={() => navigate(`/ver/${"seleccione-carreta"}`)}>IR</Button>
      </Card>

      <Card className="item-Menu">
        <h1>Descargar Excel de checkList</h1>
        <Button onClick={() => navigate(`/ver/${"CLExcel"}`)}>IR</Button>
      </Card>
    </div>
  );
}
