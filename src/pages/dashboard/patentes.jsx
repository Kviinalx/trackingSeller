import React, { useState } from 'react';
import { ChevronDown, Truck, Package} from 'lucide-react';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';

const Seguimiento = () => {
  // Datos de ejemplo para las métricas generales
  const overallMetrics = {
    gestionadas: { value: 75, total: 100 },
    sinAsignar: { value: 15, total: 100 },
    asignadas: { value: 60, total: 100 },
    pendientes: { value: 25, total: 100 },
    enRuta: { value: 45, total: 100 },
    entregadas: { value: 35, total: 100 },
    noEntregadas: { value: 5, total: 100 }
  };

  // Datos de ejemplo para las patentes
  const [fleetData] = useState([
    {
      patente: "ABC123",
      conductor: "Uwu Toro",
      metricas: {
        gestionadas: 25,
        sinAsignar: 5,
        asignadas: 20,
        pendientes: 8,
        enRuta: 15,
        entregadas: 12,
        noEntregadas: 2
      },
      ordenes: [
        { id: "OC001", estado: "Entregada", direccion: "Av. Principal 123", fecha: "2024-01-15" },
        { id: "OC002", estado: "En Ruta", direccion: "Calle Secundaria 456", fecha: "2024-01-15" }
      ]
    },
    {
      patente: "XYZ789",
      conductor: "Ignacio Shala",
      metricas: {
        gestionadas: 30,
        sinAsignar: 3,
        asignadas: 27,
        pendientes: 10,
        enRuta: 20,
        entregadas: 15,
        noEntregadas: 1
      },
      ordenes: [
        { id: "OC003", estado: "Pendiente", direccion: "Plaza Central 789", fecha: "2024-01-15" },
        { id: "OC004", estado: "Asignada", direccion: "Av. Libertad 012", fecha: "2024-01-15" }
      ]
    }
  ]);

  const [expandedPatente, setExpandedPatente] = useState(null);

  const getStatusColor = (status) => {
    const colors = {
      Entregada: 'text-green-600',
      'En Ruta': 'text-blue-600',
      Pendiente: 'text-yellow-600',
      Asignada: 'text-purple-600',
      'No Entregada': 'text-red-600'
    };
    return colors[status] || 'text-gray-600';
  };

  // Función para calcular el porcentaje
  const calculatePercentage = (value, total) => {
    return ((value / total) * 100).toFixed(1);
  };

  return (
    <>
    <Sidebar />
    <Navbar />
    <div className="pt-14 px-4 lg:ml-60 min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 space-y-6">
        {/* Métricas Generales */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Métricas Generales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(overallMetrics).map(([key, data]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 capitalize">{key}</h3>
                <div className="mt-2 flex items-end justify-between">
                  <div className="text-2xl font-bold">{data.value}</div>
                  <div className="text-sm text-gray-500">
                    {calculatePercentage(data.value, data.total)}%
                  </div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${calculatePercentage(data.value, data.total)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detalles por Patente */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold">Detalles por Patente</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {fleetData.map((vehicle) => (
              <div key={vehicle.patente} className="p-4">
                <button
                  onClick={() => setExpandedPatente(
                    expandedPatente === vehicle.patente ? null : vehicle.patente
                  )}
                  className="w-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Truck className="h-6 w-6 text-gray-400" />
                      <div>
                        <h3 className="font-bold">{vehicle.patente}</h3>
                        <p className="text-sm text-gray-500">{vehicle.conductor}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        expandedPatente === vehicle.patente ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {expandedPatente === vehicle.patente && (
                  <div className="mt-4 space-y-4">
                    {/* Métricas de la patente */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(vehicle.metricas).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-3 rounded">
                          <h4 className="text-sm font-medium text-gray-500 capitalize">{key}</h4>
                          <div className="text-lg font-bold mt-1">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tabla de órdenes */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Orden
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Estado
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Dirección
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Fecha
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {vehicle.ordenes.map((orden) => (
                            <tr key={orden.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <Package className="h-5 w-5 mr-2 text-gray-400" />
                                  {orden.id}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`${getStatusColor(orden.estado)} font-medium`}>
                                  {orden.estado}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {orden.direccion}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                {orden.fecha}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Seguimiento;