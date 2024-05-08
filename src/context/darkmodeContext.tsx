import React from "react"
import { useContext, useState } from "react"

const DarkModeContext = React.createContext(null)

export default DarkModeContext

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        try {
            const storedTheme = localStorage.getItem('theme')
            return storedTheme ? JSON.parse(storedTheme) : false
        } catch (error) {
            return false
        }
    }
    )

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    React.useEffect(() => {
        try {
            if (isDarkMode) {
                document.documentElement.setAttribute('data-mode', 'dark')
            } else {
                document.documentElement.removeAttribute('data-mode')
            }
            localStorage.setItem('theme', JSON.stringify(isDarkMode))
        } catch (error) {
            console.error('Impossible de stocker le thème dans localStorage:', error)
        }
    }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </DarkModeContext.Provider>
    )

}