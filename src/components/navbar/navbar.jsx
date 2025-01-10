import React from 'react';
import { UserCircle } from 'lucide-react';

const Navbar = ({ isSidebarOpen }) => {
  return (
    <nav className={`
      bg-white 
      shadow-md
      fixed 
      top-0 
      right-0
      z-30
      transition-all
      duration-300
      h-11
      ${isSidebarOpen ? 'lg:ml-64 ml-0' : 'lg:ml-16 ml-0'}
      ${isSidebarOpen ? 'lg:w-[calc(100%-16rem)] w-full' : 'lg:w-[calc(100%-4rem)] w-full'}
    `}>
      <div className="h-full flex items-center justify-end px-4">
        {/* Texto de bienvenida y Avatar agrupados */}
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold text-gray-800">
            Hola, Intertruck
          </div>
          <UserCircle className="h-8 w-8 text-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;