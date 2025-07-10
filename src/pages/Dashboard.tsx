import { useAuth } from "../context/AuthContext";
import { WiDaySunny, WiRain, WiStrongWind } from "react-icons/wi";
import { FaArrowUp } from 'react-icons/fa';
export default function Dashboard() {
const {user} = useAuth()
console.log(user)
  return (
   <div className="p-4 sm:p-6">
  <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">Bienvenido</h1>
    <h2  className="text-2xl font-bold mb-4 text-center sm:text-left">{user?.nombre} {user?.apellido} </h2>
  {/* Tarjeta principal */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2">
    <div className="bg-white p-4 rounded-lg shadow text-center sm:text-left">
      <h3 className="text-lg font-bold mb-1 text-gray-700">Predio</h3>
          <p className="text-2xl font-bold text-blue-600">{ user?.predio}</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow justify-around sm:text-left">
          <h2 className="text-lg font-bold mb-1 text-gray-700">Clima</h2>
          <div className="flex flex-row  items-center gap-3">
          <WiDaySunny size={48} />  <span className="text-2xl font-bold text-blue-600">20°</span>
          <WiStrongWind	 size={48} />  <span className="text-2xl font-bold text-blue-600"> N/E 25km/h</span>         
          <WiRain size={48} />  <span className="text-2xl font-bold text-blue-600">70 %</span>
          </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow text-center sm:text-left">
          <h2 className="text-lg font-bold mb-1 text-gray-700">Altura del Río</h2>
          <div className="flex flex-row justify-center items-center gap-4">
            <span className="text-2xl font-bold text-blue-600" >4.5</span> 
            <FaArrowUp />
            <span className="text-2xl font-bold text-blue-600">0.5 Cm</span>
          </div>
     
    </div>
  </div>

  
</div>

  );
}
