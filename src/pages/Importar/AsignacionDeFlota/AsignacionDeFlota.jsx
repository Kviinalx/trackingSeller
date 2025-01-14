import React, { useState } from 'react';
import { Upload, Download, FileSpreadsheet } from 'lucide-react';
import Sidebar from '../../../components/sidebar/sidebar';
import Navbar from '../../../components/navbar/navbar';

const DetallesImportacion = () => {
  const [importHistory] = useState([
    {
      id: 1,
      fileName: 'importacion_enero_2024.xlsx',
      correctRecords: 145,
      incorrectRecords: 3,
      createdAt: '2024-01-10 14:30:00'
    },
    {
      id: 2,
      fileName: 'carga_febrero_2024.xlsx',
      correctRecords: 168,
      incorrectRecords: 5,
      createdAt: '2024-02-01 09:15:00'
    },
    {
      id: 3,
      fileName: 'datos_marzo_2024.xlsx',
      correctRecords: 132,
      incorrectRecords: 0,
      createdAt: '2024-03-05 11:20:00'
    }
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  };

  const handleDownloadTemplate = () => {
    console.log('Descargando plantilla...');
  };

  return (
    <>
    <Sidebar />
    <Navbar />
    <div className="pt-14 px-4 lg:ml-60 min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto space-y-6 py-6">
        {/* Sección de importación */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FileSpreadsheet className="h-6 w-6" />
              Importar Excel
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {/* Área de importación */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Upload className="h-12 w-12 text-gray-400" />
                <div className="text-center">
                  <label className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                    Seleccionar archivo
                    <input
                      type="file"
                      className="hidden"
                      accept=".xlsx,.xls"
                      onChange={handleFileUpload}
                    />
                  </label>
                  <p className="mt-2 text-sm text-gray-500">o arrastra y suelta aquí</p>
                </div>
              </div>
            </div>

            {/* Botón de descarga de plantilla */}
            <button
              onClick={handleDownloadTemplate}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download className="h-5 w-5" />
              Descargar Plantilla
            </button>
          </div>
        </div>

        {/* Tabla de importaciones */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold">Últimas Importaciones</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre del Excel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registros Correctos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registros Incorrectos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Creación</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {importHistory.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.fileName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-green-600">{item.correctRecords}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-red-600">{item.incorrectRecords}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetallesImportacion;