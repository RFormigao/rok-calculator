import Home from 'layouts/Home'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
