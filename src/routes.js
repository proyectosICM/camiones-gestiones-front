
import { Login } from "./Login/Login";
import { Redirect } from "./Login/Redirect";
import { VerificarVehiculo } from "./VistaConductor/VerificarVehiculo";



export const routes = [
    //Redireccion
    { path: '/login', component: <Login /> },
    { path: '/redirect', component: <Redirect /> },
    { path: '/verificar-vehiculo', component: <VerificarVehiculo />}
]