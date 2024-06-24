import React from 'react'
import Header from '../src/Componentes/Header/Header'
import Footer from '../src/Componentes/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>

    )
}

export default Layout