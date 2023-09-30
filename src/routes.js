
import { Login } from "./Login/Login";
import { Redirect } from "./Login/Redirect";
import { VerificarVehiculo } from "./VistaConductor/VerificarVehiculo";
import { MenuCamiones } from './Common/MenuCamiones/MenuCamiones';
import { CamionDetalle } from "./Common/MenuCamiones/CamionDetalle";

import { RevisarCheckListConductor } from "./VistaMecanico/RevisarChekListConductor";
import { VerChecklist } from "./VistaMecanico/VerCheckList";
import { CLConductorDetalle } from "./Common/CheckList/CLConductorDetalle";
import { CheckListConductor } from "./VistaConductor/CheckListConductor";
import { CheckListAvanzado } from "./Common/CheckList/CheckListAvanzado";
import { MenuCRUD } from "./Common/CRUD/MenuCRUD";
import { Home } from "./Home";
import { MenuPrueba } from "./menuprueba";
import { VerC } from "./VerC";
import { ClCamiones } from "./CLCamiones";
import { CLExcel } from "./CLExcel";



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
    { path: '/CLConductor-detalle', component: <CLConductorDetalle />},
    { path: '/checklist-avanzado', component: <CheckListAvanzado />},

    { path: '/menu-CRUD', component: <MenuCRUD />},


    { path: '/Home', component: <Home />},
    { path: '/menu', component: <MenuPrueba />},
    { path: '/clcamiones', component: <ClCamiones />},
    { path: '/ver/:params', component: <VerC />},

    { path: '/CLExcel', component: <CLExcel />}
]