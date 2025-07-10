import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Incidentes from "../pages/Incidentes";
import Usuarios from "../pages/Usuarios";
import PrivateRoute from "./PrivateRoutes";
import Login from "../pages/Login";
import Layout from "../components/Layout";

export default function Router() {
  return (
   
    <Routes>
      {/* Redirigir raíz a /login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

       {/* Ruta pública */}
      <Route path="/login" element={<Login />} />

        {/* Rutas protegidas con layout */}
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >   
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incidentes" element={<Incidentes />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Route>
          {/* Redireccionamiento */}
       <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
   
  );
}
