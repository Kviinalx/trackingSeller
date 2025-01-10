import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrdersList from '../../pages/Pedidos/listaOrdenes/listaOrdenes';
import Layout from '../../pages/layout/layout';
import Login from '../../pages/Login/login';
import CreacionOrdenMnual from '../../pages/Pedidos/CreacionOrdenManual/CreacionOrdenManual';


function App() {

    return(
    <>
        <Router>
            <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/login" element={<Login />}/>
                <Route path="/orders/list" element={<OrdersList />} />
                <Route path="/creacionOrdenManual" element={<CreacionOrdenMnual />} />
            </Routes>
        </Router>
    </>
    )
}

export default App
