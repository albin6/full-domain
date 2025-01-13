import React from 'react'
import './ThemeChangerComponent.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

function ThemeChangerComponent() {
    const {theme, changeTheme} = useContext(ThemeContext)
  return (
    <div className={`${theme == 'l' ? 'dark' : 'light'} container`}>
        <div className={`${theme == 'l' ? 'light' : 'dark'} mainDiv`}>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default ThemeChangerComponent