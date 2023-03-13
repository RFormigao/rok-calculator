import Resource from 'layouts/Resource'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export default function CalculatorAcc() {
  return (
    <ThemeProvider theme={theme}>
      <Resource />
    </ThemeProvider>
  )
}
