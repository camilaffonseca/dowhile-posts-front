import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@xstyled/styled-components'

import App from 'components/pages/App'

import theme from 'theme'

import 'theme/preflight.css'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
