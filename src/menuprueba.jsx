import React from 'react'
import { Home } from './Home';
import { Prueba1 } from './prueba1';

export function MenuPrueba(){
    return(
        <div>
            <Home pr={<Prueba1 />} />
        </div>
    );
}