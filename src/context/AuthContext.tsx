import { createContext, useContext, useState, type ReactNode } from "react";
import { type User} from '../types/Users'

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    //guardamos el usuario y el token en el localStorage
    const [user, setUser] = useState<User | null>(() => {
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  });

    const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));

    // Obtenemos el rol del usuario desde el localStorage
const login = (user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

    const logOut = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token')
    }
    return (
        <AuthContext.Provider value={{ user, token, login, logOut }}>
            {children}
        </AuthContext.Provider>
        
    )

}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};