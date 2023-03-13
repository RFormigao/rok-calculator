import ExpHero from 'layouts/ExpHero'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <ExpHero />
    </ThemeProvider>
  )
}
