import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function ClCamiones(){
    const [datos, setDatos] = useState()
    
    const Listar = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/carriles');
            setDatos(response.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }

    useEffect(()=> {
        Listar();
    },[])

    useEffect(() => {
        console.log(datos); // Colocar el console.log aquí
    }, [datos]);

    return(
        <>
            <h1>Seleccione un camion</h1>
        </>
    );
}
