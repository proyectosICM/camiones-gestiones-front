import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useListarElementos } from "../../Hooks/CRUDHook";
import { checkListxcamionURL } from "../../API/apiurls";
import { tables } from "./clcConductor";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

// ... (previous imports and code)

export function CLConductorDetalle() {
  const [CLConductor, setCLConductor] = useState();
  const dataCamionDeta = localStorage.getItem("dataCamionDeta");
  const navigate = useNavigate();
  const ListarCLConductor = useListarElementos(
    `${checkListxcamionURL}${dataCamionDeta}`,
    setCLConductor
  );
  console.log(CLConductor);
  useEffect(() => {
    ListarCLConductor();
  }, [dataCamionDeta]);

  return (
    <div className="entero">
      <Button variant="primary" onClick={() => navigate("/camion-detalle")}>
        Atras
      </Button>
      <Button variant="primary" onClick={() => navigate("/revisar-cheklist-conductor")}>
        Volver al menu
      </Button>
      {CLConductor && <h1>Placa {CLConductor[0].camionesModel.placa}</h1>}
      {CLConductor ? (
        <div className="menu">
          {tables.map((t) => (
            <Card key={t.titulo} className="item-Menu">
              <Card.Title>{t.titulo.toUpperCase()}</Card.Title>
              <Card.Body>
                {t.datos.map((dato) => {
                  const isTrue = CLConductor[0][t.titulo][dato.atributo];
                  const iconStyle = {
                    color: isTrue ? "green" : "red",
                  };
                  return (
                    <h5 key={dato.atributo} style={iconStyle}>
                      {dato.nombre}{" "}
                      {isTrue ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                    </h5>
                  );
                })}
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
      <Button onClick={() => navigate("/checklist-avanzado")}>Realizar CheckList Avanzado</Button>
    </div>
  );
}
