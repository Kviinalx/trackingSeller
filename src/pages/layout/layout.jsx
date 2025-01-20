
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Truck, Package, Users, BarChart } from 'lucide-react';

const Layout = () => {
  const estadisticas = [
    { titulo: 'Entregas Completadas', valor: '2,345', icono: <Package className="w-8 h-8" /> },
    { titulo: 'Flota Activa', valor: '48', icono: <Truck className="w-8 h-8" /> },
    { titulo: 'Conductores', valor: '56', icono: <Users className="w-8 h-8" /> },
    { titulo: 'Eficiencia', valor: '94%', icono: <BarChart className="w-8 h-8" /> }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className="lg:ml-60 pt-14">
        <div className="p-6">
          <Outlet />
          {window.location.pathname === '/layout' && (
            <div className="space-y-6">
              {/* Banner de bienvenida */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  ¡Bienvenido al Sistema de Tracking!
                </h1>
                <p className="text-gray-600 max-w-2xl">
                  Gestiona tus envíos, monitorea tu flota y optimiza las entregas desde un único lugar. 
                  Accede a todas las herramientas desde el menú lateral.
                </p>
              </div>

              {/* Tarjetas de estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {estadisticas.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        {stat.icono}
                      </div>
                    </div>
                    <h3 className="text-gray-500 text-sm">{stat.titulo}</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stat.valor}</p>
                  </div>
                ))}
              </div>

              {/* Sección de acciones rápidas */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Acciones Rápidas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button className="p-4 bg-blue-50 rounded-lg text-blue-600 text-left hover:bg-blue-100 transition-colors">
                    <h3 className="font-semibold">Crear Nueva Orden</h3>
                    <p className="text-sm text-blue-500 mt-1">Registra un nuevo pedido en el sistema</p>
                  </button>
                  <button className="p-4 bg-green-50 rounded-lg text-green-600 text-left hover:bg-green-100 transition-colors">
                    <h3 className="font-semibold">Asignar Flota</h3>
                    <p className="text-sm text-green-500 mt-1">Gestiona la asignación de vehículos</p>
                  </button>
                  <button className="p-4 bg-purple-50 rounded-lg text-purple-600 text-left hover:bg-purple-100 transition-colors">
                    <h3 className="font-semibold">Ver Reportes</h3>
                    <p className="text-sm text-purple-500 mt-1">Accede a las estadísticas detalladas</p>
                  </button>
                </div>
              </div>

              {/* Pie de página */}
              <div className="text-center text-gray-500 text-sm mt-8">
                © 2024 Sistema de Tracking. Todos los derechos reservados.
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
    </>
  );
};

export default Layout;
