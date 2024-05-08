import React from 'react'
import { useContext } from 'react'
import DarkModeContext from '../context/darkmodeContext'
import Image from 'next/image';
import soleil from '../public/Header/Button/soleil.png'
import lune from '../public/Header/Button/lune.png'

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(DarkModeContext);


    return (
        <button
            onClick={toggleTheme}
        >
            {isDarkMode ? (
                <Image src={soleil} alt='Soleil' width={40} height={40}/>
            ) : (
                <Image src={lune} alt='Lune' width={40} height={40}/>
            )}

        </button>
    )
}

export default ThemeToggle;