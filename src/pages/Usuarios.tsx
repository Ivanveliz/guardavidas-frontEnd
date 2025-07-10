import { useEffect, useState } from "react"
import { fethFakeUsers } from "../services/fakeAPi"
import type { User } from "../types/Users"
export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await fethFakeUsers()
      setUsers(data)
    }
    getUsers()
  },[])
  
  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-100">
    <table className="min-w-full divide-y divide-gray-100 text-sm">
  <thead>
    <tr>
      <th className="px-4 py-2 text-left font-medium text-gray-600">N° de Usuario</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Nombre</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Apellido</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Email</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Teléfono</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Predio</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Cargo</th>

    </tr>
  </thead>
 <tbody className="divide-y divide-gray-100 bg-white">
        {users.map((user) => (
      <tr key={user.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 whitespace-nowrap">{user.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.nombre}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.apellido}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.tel}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.predio}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.cargo}</td>
              
            </tr>
    ))}
    </tbody>
    </table>
    </div>
  )
}
