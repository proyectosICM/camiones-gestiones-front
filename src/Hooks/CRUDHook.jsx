import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useListarElementos(url, setDatos) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const fetchData = useCallback(async () => {
      try {
        const results = await axios.get(`${url}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDatos(results.data);
        //console.log(results.data);
      } catch (error) {
        if (error.response && error.response.status === 500) {
          // Token expirado, redirigir al inicio de sesión
          navigate("/login");

        } else {
          // Otro error, manejarlo adecuadamente
          console.error("Error al obtener los datos del camión z  :", error);
        }
      }
    }, [navigate, setDatos, token, url]);
   
    return fetchData;
  }