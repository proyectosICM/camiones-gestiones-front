import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { checkListxcamionURL } from "../../API/apiurls";
import { tables } from "../clcConductor";
import { AiFillCheckCircle, AiFillCloseCircle  } from "react-icons/ai";

export function CLConductorDetalle() {
  const [CLConductor, setCLConductor] = useState();
  const dataCamionDeta = localStorage.getItem("dataCamionDeta");

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/ver-checklist");
  };

  const ListarCLConductor = useListarElementos(
    `${checkListxcamionURL}${dataCamionDeta}`,
    setCLConductor
  );
  useEffect(() => {
    ListarCLConductor();
  }, [ListarCLConductor]);
  console.log(CLConductor);

  return (
    <>
      <Button variant="primary" onClick={handleBack}>
        Atras
      </Button>
      {CLConductor ? (
        <>
          <h1>Placa {CLConductor[0].camionesModel.placa}</h1>

          {tables.map((t) => (
            <Card key={t.titulo}>
              <Card.Title>{t.titulo}</Card.Title>
              <Card.Body>
                {t.datos.map((dato) => {
                  if (t.titulo === "Llantas") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].llantas[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Motor") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].motor[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Sistema Electrico") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].sistemaElectrico[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Transmision") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].transmision[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Direccion") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].direccion[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Frenos") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].frenos[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Suspension") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].suspension[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } else if (t.titulo === "Cabina") {
                    return (
                      <h5 key={dato.atributo}>
                        {dato.nombre} {CLConductor[0].cabina[dato.atributo] ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                      </h5>
                    );
                  } 
                  return null;
                })}
              </Card.Body>
            </Card>
          ))}
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}
