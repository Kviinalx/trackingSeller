import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrdersList from '../../pages/Pedidos/listaOrdenes/listaOrdenes';
import Layout from '../../pages/layout/layout';
import Login from '../../pages/Login/login';
import CreacionOrdenMnual from '../../pages/Pedidos/CreacionOrdenManual/CreacionOrdenManual';
import DetallesImportacion from '../../pages/Importar/AsignacionDeFlota/AsignacionDeFlota';
import Seguimiento from '../../pages/dashboard/patentes';



function App() {

    return(
    <>
        <Router>
            <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/layout" element={<Layout />}/>
                <Route path="/orders/list" element={<OrdersList />} />
                <Route path="/creacionOrdenManual" element={<CreacionOrdenMnual />} />
                <Route path="/importacion/detalles" element={<DetallesImportacion />} />
                <Route path="/dashboard/patentes" element={<Seguimiento />} />
            </Routes>
        </Router>
    </>
    )
}

export default App
