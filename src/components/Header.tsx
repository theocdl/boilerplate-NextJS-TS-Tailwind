import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
    return (
        <header className="bg-gray-200 dark:bg-gray-800">
            <div className="container mx-auto flex items-center justify-between p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Pattini</h1>
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Header;
