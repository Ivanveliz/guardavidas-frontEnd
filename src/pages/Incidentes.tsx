import { useAuth } from "../context/AuthContext"


export default function Incidentes() {

  const user = useAuth()
  console.log(user)

  return (
  <div className="overflow-x-auto shadow-md rounded-lg border border-gray-100">
    <table className="min-w-full divide-y divide-gray-100 text-sm">
  <thead>
    <tr>
      <th className="px-4 py-2 text-left font-medium text-gray-600">N° de Incidente</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Codigo</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Apellido</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Email</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Teléfono</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Predio</th>
      <th className="px-4 py-2 text-left font-medium text-gray-600">Cargo</th>

    </tr>
  </thead>
 <tbody className="divide-y divide-gray-100 bg-white">
      

    </tbody>
    </table>
    </div>
  )
}
