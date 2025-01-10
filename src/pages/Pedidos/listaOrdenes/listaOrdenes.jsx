import React, { useState } from 'react';
import { Search, Filter, Download, Plus, Trash, Edit } from 'lucide-react';
import Sidebar from '../../../components/sidebar/sidebar';
import Navbar from '../../../components/navbar/navbar';

const OrdersTable = () => {
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    date: ''
  });

  // Datos de ejemplo
  const orders = [
    { id: '001', client: 'Cliente A', date: '2025-01-08', status: 'Pendiente', destination: 'Ciudad A' },
    { id: '002', client: 'Cliente B', date: '2025-01-08', status: 'Entregado', destination: 'Ciudad B' },
    { id: '003', client: 'Cliente C', date: '2025-01-08', status: 'En Ruta', destination: 'Ciudad C' },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Navbar />
      <div className="lg:ml-60 p-5 mt-9">
        {/* Header con título y botón de nueva orden */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Lista de Órdenes</h1>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            Nueva Orden
          </button>
        </div>

        {/* Barra de filtros */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Búsqueda */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="search"
                placeholder="Buscar orden..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={filters.search}
                onChange={handleFilterChange}
              />
            </div>

            {/* Filtro de estado */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                name="status"
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="all">Todos los estados</option>
                <option value="pending">Pendiente</option>
                <option value="inRoute">En Ruta</option>
                <option value="delivered">Entregado</option>
              </select>
            </div>

            {/* Filtro de fecha */}
            <div>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-2 border rounded-lg"
                value={filters.date}
                onChange={handleFilterChange}
              />
            </div>

            {/* Botón de exportar */}
            <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              <Download size={20} />
              Exportar
            </button>
          </div>
        </div>

        {/* Tabla con scroll horizontal en dispositivos pequeños */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="max-h-[800px] overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 top-0 sticky">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Destino</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${order.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' : 
                          order.status === 'En Ruta' ? 'bg-blue-100 text-blue-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.destination}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <Edit size={18} className="text-blue-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <Trash size={18} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;