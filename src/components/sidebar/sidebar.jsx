import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, LayoutDashboard, Archive, Import, LogOut } from 'lucide-react';

// Definición de las rutas del menú
const MENU_ITEMS = [
  {
    title: 'Pedidos',
    icon: <Archive />,
    submenu: [
      { label: 'Lista de órdenes', path: '/orders/list' },
      { label: 'Creación de orden manual', path: '/creacionOrdenManual' }
    ]
  },
  {
    title: 'Importar',
    icon: <Import />,
    submenu: [
      { label: 'Recolección de pedidos', path: '/importacion/detalles' },
      { label: 'Asignación de flota', path: '/import/fleet' },
      { label: 'Carga manual', path: '/import/manual' }
    ]
  },
  {
    title: 'Dashboard',
    icon: <LayoutDashboard />,
    submenu: [
      { label: 'Patentes', path: '/dashboard/patentes' }
    ]
  }
];

const SubMenuItem = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`
        w-full p-3 pl-12 text-left 
        hover:bg-gray-700 transition-colors
        flex items-center
        ${isActive ? 'bg-gray-700' : ''}
      `}
    >
      {item.label}
    </Link>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (index) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 left-4 z-50 p-1 rounded-lg bg-gray-800 text-white lg:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-40
        h-screen w-60
        bg-gray-800 text-white
        transition-all duration-300 ease-in-out
        flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-16'}
      `}>
        <div className="flex flex-col h-full overflow-hidden">
          <div className="h-14 flex items-center justify-center px-4 text-xl font-bold border-gray-700 bg-gray-800">
            {isOpen ? 'Tracking' : ''}
          </div>

          <nav className="flex-1 overflow-hidden">
            {MENU_ITEMS.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleMenu(index)}
                  className={`
                    w-full p-2 flex items-center justify-between
                    hover:bg-gray-700 transition-colors
                    ${openMenus[index] ? 'bg-gray-700' : ''}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5">{item.icon}</span>
                    {isOpen && <span>{item.title}</span>}
                  </div>
                  {isOpen && (
                    <ChevronDown 
                      className={`transform transition-transform ${openMenus[index] ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  )}
                </button>

                {isOpen && openMenus[index] && (
                  <div className="bg-gray-900">
                    {item.submenu.map((subItem, subIndex) => (
                      <SubMenuItem key={subIndex} item={subItem} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="mt-auto p-3 border-t border-gray-700 flex items-center gap-3 hover:bg-gray-700 transition-colors w-full"
          >
            <LogOut className="w-6 h-6" />
            {isOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;