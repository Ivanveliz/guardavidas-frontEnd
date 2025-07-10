import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fakeLogin } from "../auth/auth";

//mensaje de error
function getErrorMessage(error: unknown): string {
   if (error instanceof Error) return error.message;
  return String(error);
}   


//manejo de Login:
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    //obtener el token y la funcion de contexto
    const { token, login } = useAuth();
       
    // Hook para navegar programáticamente entre rutas
    const navigate = useNavigate();


    // Efecto para redirigir al usuario al dashboard si ya está logueado (tiene token)
    useEffect(() => {
        if(token) {
            navigate("/dashboard", {replace: true});
        }
    }, [token, navigate]);


    //fuion para manejra el envio
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        //validacion para que el email y la contraseña no esten vacios
        if (!email.trim() || !password.trim()) {
            alert('Ingresá los campos requeridos.')
            return
        }
   
        setLoading(true); // Activar loading para bloquear inputs y botón
        try {
            //llamamos a la API falsa
            const { token, user } = await fakeLogin(email, password)
            
            //se guarda el usuario que se trajo en el contexto de autentificacion
            login(user, token)
            navigate("/dashboard");
        } catch (error: unknown) {
            alert(getErrorMessage(error))
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-950 px-4">
  <form
    onSubmit={handleLogin}
    className="w-full max-w-sm bg-white p-6 rounded-lg shadow space-y-5"
  >
    <h2 className="text-2xl font-bold text-center text-blue-600">
      Iniciar Sesión
    </h2>

    {/* Email */}
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium mb-1">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="email@ejemplo.com"
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        required
      />
    </div>

    {/* Contraseña */}
    <div className="flex flex-col">
      <label htmlFor="password" className="text-sm font-medium mb-1">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        placeholder="••••••••"
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        required
      />
    </div>

    {/* Botón de enviar */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300"
      disabled={loading}
    >
      {loading ? "Cargando..." : "Ingresar"}
    </button>
  </form>
</div>

    )
}
 
