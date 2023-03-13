import Accelerator from 'layouts/Accelerator'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export default function CalculatorAcc() {
  return (
    <ThemeProvider theme={theme}>
      <Accelerator />
    </ThemeProvider>
  )
}
