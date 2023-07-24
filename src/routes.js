
import { Login } from "./Login/Login";
import { Redirect } from "./Login/Redirect";
import { VerificarVehiculo } from "./VistaConductor/VerificarVehiculo";
import { MenuCamiones } from './Common/MenuCamiones/MenuCamiones';
import { CamionDetalle } from "./Common/MenuCamiones/CamionDetalle";
import { CheckListConductor } from "./VistaConductor/CheckListConductor";
import { RevisarCheckListConductor } from "./VistaMecanico/RevisarChekListConductor";
import { VerChecklist } from "./VistaMecanico/VerCheckList";
import { CLConductorDetalle } from "./Common/CheckList/CLConductorDetalle";



export const routes = [
    //Redireccion
    { path: '/login', component: <Login /> },
    { path: '/redirect', component: <Redirect /> },


    { path: '/verificar-vehiculo', component: <VerificarVehiculo />},
    { path: '/menu-camiones', component: <MenuCamiones />},
    { path: '/camion-detalle', component: <CamionDetalle />},
    { path: '/checklist-conductor', component: <CheckListConductor />},

    { path: '/revisar-cheklist-conductor', component: <RevisarCheckListConductor />},
    { path: '/ver-checklist', component: <VerChecklist />},
    { path: '/CLConductor-detalle', component: <CLConductorDetalle />}
]