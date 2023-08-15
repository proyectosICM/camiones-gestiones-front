import React from 'react';
import { NavBar } from './Common/NavBar';
import { Prueba1 } from './prueba1';
import { DashBoard } from './DashBoard';

export function Home(){
    return(
        <div>
            <NavBar pr={<DashBoard />} />
        </div>
    );
}