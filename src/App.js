import './App.css';
import { Welcome } from './Login/Welcome';
import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import { routes } from './routes';
import { Login } from './Login/Login';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }, 100); // Actualiza el token cada segundo

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
    };
  }, []);

  return (
    <div className="App">
      <Router>
        {/*token && <NavBarSelect />*/}
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                token ? <Navigate to="/welcome" /> : <Navigate to="/login" />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />

            {routes.map((route, index) => (
              <Route
                key={index}
                exact
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
