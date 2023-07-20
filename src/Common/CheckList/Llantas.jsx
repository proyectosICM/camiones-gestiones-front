import React from 'react'
import { Button } from 'react-bootstrap';

export function Llantas(){

    return(
        <>
            <h1>Llantas</h1>
            <div>
                <h1>Revisar ajuste: </h1>
                <Button variant='success'>v</Button>
                <Button variant='danger'>x</Button>
            </div>
            <div>
                <h1>Cortes y averias: </h1>
                <Button variant='success'>v</Button>
                <Button variant='danger'>x</Button>
            </div>
            <div>
                <h1>Revisar Presion recomendada: </h1>
                <Button variant='success'>v</Button>
                <Button variant='danger'>x</Button>
            </div>
    

        </>
    );
}