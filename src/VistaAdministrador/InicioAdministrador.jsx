import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function InicioAdministrador() {
  const navigate = useNavigate();
  return (
    <div className="entero">
      <h1>Buenos dias Administrador</h1>
      <div className="menu">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Administracion</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Button variant="primary" onClick={() => navigate('/menu-CRUD')}>IR</Button>
        </Card>

        <Card style={{ width: "18rem", margin: "20px"}}>
          <Card.Body>
            <Card.Title>Vehiculos en mal estado</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Button variant="primary">IR</Button>
        </Card>

        <Card style={{ width: "18rem", margin: "20px"}}>
          <Card.Body>
            <Card.Title>Vehiculos en reparacion</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Button variant="primary">IR</Button>
        </Card>
      </div>
    </div>
  );
}
