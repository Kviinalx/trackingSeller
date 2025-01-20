// OrderDetailModal.js
import React from 'react';
import { X, MapPin, ExternalLink } from 'lucide-react';

const OrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay con fondo negro semitransparente */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 min-h-screen w-full"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white rounded-lg w-full max-w-3xl h-[90vh] flex flex-col z-50">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Detalles de la Orden</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content with scroll */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Información básica */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Orden de Compra</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Estado</p>
                    <p className="font-medium">{order.estado}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Fecha de Compra</p>
                    <p className="font-medium">{order.fecha}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Fecha de Entrega</p>
                    <p className="font-medium">{order.fechaEntrega || 'Pendiente'}</p>
                  </div>
                </div>

                {/* Dirección y Maps */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Dirección de Entrega</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="text-gray-400 mt-1" size={20} />
                    <p className="text-gray-600">{order.direccion}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    Ver en Google Maps
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Detalles del producto */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Detalle del Producto</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Producto</p>
                        <p className="font-medium">{order.producto?.nombre || 'N/A'}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Cantidad</p>
                        <p className="font-medium">{order.producto?.cantidad || 'N/A'}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">SKU</p>
                        <p className="font-medium">{order.producto?.sku || 'N/A'}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Categoría</p>
                        <p className="font-medium">{order.producto?.categoria || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500">Descripción</p>
                      <p className="mt-1">{order.producto?.descripcion || 'Sin descripción disponible'}</p>
                    </div>
                  </div>
                </div>

                {/* Fotos */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Fotos</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {order.fotos?.map((foto, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={foto}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )) || <p className="text-gray-500">No hay fotos disponibles</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;