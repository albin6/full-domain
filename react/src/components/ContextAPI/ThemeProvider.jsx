import React, {createContext, useState} from 'react'

export const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('l')
  function changeTheme() {
    setTheme(theme == 'l' ? 'b' : 'l')
  }
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider