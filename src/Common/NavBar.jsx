import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { VscThreeBars } from "react-icons/vsc";

import "./NavBar.css"; // Agrega la referencia al archivo CSS
import { Logout } from "../Hooks/Logout";
import { useNavigate } from "react-router-dom";
import { Prueba1 } from "../prueba1";
import { Prueba2 } from "../prueba2";
import { Button } from "react-bootstrap";

export function NavBar({ pr }) {
  const [sliderBarOpen, setSliderBarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSliderButtonClick = () => {
    setSliderBarOpen(!sliderBarOpen);
  };

  return (
    <div className={`app-container ${sliderBarOpen ? "slider-open" : ""}`}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link eventKey={2} onClick={handleSliderButtonClick}>
              <VscThreeBars size={30} />
            </Nav.Link>
          </Nav>
          <Navbar.Brand
            onClick={() => navigate("/Home")}
            style={{ cursor: "pointer" }}
          >
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={2} onClick={() => Logout(navigate)}>
                Cerrar sesion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido del SliderBar */}
      <div className={`slider-bar ${sliderBarOpen ? "open" : ""}`}>
        <h2>SliderBar Content</h2>
        <p>This is the content of the SliderBar.</p>
        <div onClick={() => navigate(`/ver/${"clcamion"}`)} className="item">
          Cuenta
        </div>
        <div onClick={() => navigate(`/ver/${"clcamion"}`)} className="item">
          Ver checkList de camiones
        </div>
        <div onClick={() => navigate(`/ver/${"A"}`)} className="item">
          Ver checkList de carretas
        </div>
        <div onClick={() => navigate(`/ver/${"clcamion"}`)} className="item">
          Cerrar Sesion
        </div>
      </div>
      <div className={`content ${sliderBarOpen ? "slider-open" : ""}`}>
        {pr}
      </div>
    </div>
  );
}
