import React from "react"
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>AgenSaaS</title>
            </Head>
            <Header />
            {children}
        </div>
    );
}

export default Layout;