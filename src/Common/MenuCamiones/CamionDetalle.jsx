import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function CamionDetalle(){
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/verificar-vehiculo')
    }

    const handleCheckList = () => {
        navigate('/checklist-conductor');
    }

    return(
        <div>
            <Button variant='primary' onClick={handleBack}>Atras</Button>
            <h1>Placa</h1>
            <h1>Marca</h1> 
            <h1>Modelo</h1> 
            <Button variant='primary' onClick={handleCheckList}>Realizar CheckList</Button>
        </div>
    );
} 