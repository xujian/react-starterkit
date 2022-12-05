import React, { useMemo } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useAppSelector } from '../store/hooks'
import { selectColorMode, selectScheme } from './theme.slice'
import schemes from './schemes'
import componentOverrides from './overrides'
import customShadows from './shadows'
import typography from './typography'

const AppThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const colorMode = useAppSelector(selectColorMode),
    scheme = useAppSelector(selectScheme),
    makeThemeOptions = schemes[scheme] || schemes['klein'],
    paletteTheme = makeThemeOptions(colorMode)
  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        }
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        }
      },
      palette: paletteTheme.palette,
      customShadows,
      typography: typography(paletteTheme)
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scheme, colorMode, paletteTheme]
  )
  const theme = createTheme(themeOptions)
  theme.components = componentOverrides(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider