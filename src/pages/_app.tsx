import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { DarkModeProvider } from '../context/darkmodeContext'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}