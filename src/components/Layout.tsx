// src/components/Layout.tsx
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaExclamationTriangle, FaUser } from "react-icons/fa";
import Button from "./Button.logout";
import { useState } from "react";



const menuItems = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Incidentes", icon: <FaExclamationTriangle />, path: "/incidentes" },
  { name: "Usuarios", icon: <FaUser />, path: "/usuarios" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="flex h-screen bg-gray-100"> 
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md flex flex-col transform 
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out 
          md:translate-x-0 md:static md:shadow-none
        `}
      >
        <div className="text-2xl font-bold p-4 border-b">Guardavidas</div>
        <nav className="flex flex-col flex-grow">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 hover:bg-gray-200 transition ${
                  isActive ? "bg-blue-500 text-white" : "text-gray-700"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t text-sm text-gray-500">© 2025</div>
      </aside>
      {/* Overlay para cerrar en móvil */}
      
       {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* Main */}
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow p-4 flex items-center justify-between">
              {/* Botón hamburguesa */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">App Guardavidas</h1>
          <Button />
        </header>       
        <main className="flex-grow overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
