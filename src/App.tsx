import React from 'react'
import Routes from './Routes'
import { AppThemeProvider } from './themes'
import { HttpProvider } from './contexts/http'

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <HttpProvider>
        <Routes />
      </HttpProvider>
    </AppThemeProvider>
  )
}

export default App
