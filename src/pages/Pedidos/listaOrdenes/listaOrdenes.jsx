import React, { useState } from 'react';
import { Search, Filter, Download, Plus, Trash, Edit,X } from 'lucide-react';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    client: '',
    destination: '',
    status: '',
    date: '',
    notes: ''
  });

  const handleNewOrderChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para crear la nueva orden
    console.log('Nueva orden:', newOrder);
    setIsModalOpen(false);
    setNewOrder({
      client: '',
      destination: '',
      status: '',
      date: '',
      notes: ''
    });
  };

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
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}>
            <Plus size={20} />
            Nueva Orden
          </button>
        </div>

        {/* Modal de Nueva Orden */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-lg relative">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Crear Nueva Orden</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Cliente */}
                  <div>
                    <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                      Cliente
                    </label>
                    <input
                      type="text"
                      id="client"
                      name="client"
                      value={newOrder.client}
                      onChange={handleNewOrderChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Nombre del cliente"
                      required
                    />
                  </div>

                  {/* Destino */}
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                      Destino
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={newOrder.destination}
                      onChange={handleNewOrderChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Ciudad de destino"
                      required
                    />
                  </div>

                  {/* Fecha */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={newOrder.date}
                      onChange={handleNewOrderChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Estado */}
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                      Estado
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={newOrder.status}
                      onChange={handleNewOrderChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    >
                      <option value="">Seleccionar estado</option>
                      <option value="Pendiente">Pendiente</option>
                      <option value="En Ruta">En Ruta</option>
                      <option value="Entregado">Entregado</option>
                    </select>
                  </div>
                </div>

                {/* Notas */}
                <div className="mb-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Notas
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={newOrder.notes}
                    onChange={handleNewOrderChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Notas adicionales..."
                  />
                </div>

                {/* Botones */}
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Crear Orden
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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