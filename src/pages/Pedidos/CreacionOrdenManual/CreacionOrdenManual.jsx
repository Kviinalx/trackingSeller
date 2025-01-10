import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Sidebar from '../../../components/sidebar/sidebar';
import Navbar from '../../../components/navbar/navbar';

const CreacionOrdenManual = () => {
  const [filters, setFilters] = useState({
    search: '',
    filter: 'all'
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFilters({
      search: '',
      filter: 'all'
    });
  };

  // Datos de ejemplo
  const orderDetails = {
    rut: '12.345.678-9',
    nombre: 'Juan Pérez',
    direccion: 'Av. Principal 123',
    telefono: '+56 9 1234 5678',
    email: 'juan.perez@ejemplo.com',
    ciudad: 'Santiago',
    comuna: 'Las Condes'
  };

  return (
    <>
    <Sidebar />
    <Navbar />
    <div className="min-h-screen bg-gray-100">
      <div className="lg:ml-60 p-5 mt-9">
        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Creación de Orden Manual
        </h1>
  
        {/* Barra de búsqueda y filtros */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Búsqueda */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="search"
                placeholder="Buscar por RUT o nombre..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={filters.search}
                onChange={handleFilterChange}
              />
            </div>
  
            {/* Filtro */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                name="filter"
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none"
                value={filters.filter}
                onChange={handleFilterChange}
              >
                <option value="all">Todos los tipos</option>
                <option value="personal">Personal</option>
                <option value="empresa">Empresa</option>
              </select>
            </div>
  
            {/* Botones */}
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Buscar
              </button>
              <button 
                onClick={handleClear}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
  
        {/* Cards de detalles en columna */}
        <div className="space-y-6">
          {/* Card Información del Cliente */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Información del Cliente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">RUT</label>
                <p className="text-gray-800">{orderDetails.rut}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Nombre</label>
                <p className="text-gray-800">{orderDetails.nombre}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-800">{orderDetails.email}</p>
              </div>
            </div>
            
          </div>
  
          {/* Card Información de Contacto */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Información de Contacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Teléfono</label>
                <p className="text-gray-800">{orderDetails.telefono}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Ciudad</label>
                <p className="text-gray-800">{orderDetails.ciudad}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Comuna</label>
                <p className="text-gray-800">{orderDetails.comuna}</p>
              </div>
            </div>
          </div>
  
          {/* Card Dirección de Entrega */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Dirección de Entrega
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Dirección</label>
                <p className="text-gray-800">{orderDetails.direccion}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Referencias</label>
                <p className="text-gray-800">Casa color blanco, portón negro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreacionOrdenManual;