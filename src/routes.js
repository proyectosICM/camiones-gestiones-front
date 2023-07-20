
import { Login } from "./Login/Login";
import { Redirect } from "./Login/Redirect";
import { VerificarVehiculo } from "./VistaConductor/VerificarVehiculo";
import { MenuCamiones } from './Common/MenuCamiones/MenuCamiones';
import { CamionDetalle } from "./Common/MenuCamiones/CamionDetalle";
import { CheckListConductor } from "./VistaConductor/CheckListConductor";



export const routes = [
    //Redireccion
    { path: '/login', component: <Login /> },
    { path: '/redirect', component: <Redirect /> },


    { path: '/verificar-vehiculo', component: <VerificarVehiculo />},
    { path: '/menu-camiones', component: <MenuCamiones />},
    { path: '/camion-detalle', component: <CamionDetalle />},
    { path: '/checklist-conductor', component: <CheckListConductor />}
]