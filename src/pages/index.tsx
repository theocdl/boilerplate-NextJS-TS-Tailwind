import React from 'react'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <Layout>
            <div className="bg-gray-100 dark:bg-gray-700 min-h-screen flex items-center justify-center">
                <div className="max-w-md bg-white dark:bg-gray-800 p-8 rounded shadow-md">
                    <h1 className="text-3xl dark:text-white font-semibold mb-4">Welcome to Our Website!</h1>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">Thank you for visiting our website. We're glad to have you here.</p>
                    <p className="text-gray-700 dark:text-gray-300">Feel free to explore and let us know if you need any assistance.</p>
                </div>
            </div>
        </Layout>
    )
}
