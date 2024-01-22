import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.ts'
import {ThemeProvider} from 'styled-components'

import { Signin } from './pages/signin/index'
import theme from './styles/theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Signin />
    </ThemeProvider>
  </React.StrictMode>,
)
