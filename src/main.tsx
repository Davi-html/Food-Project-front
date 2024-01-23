import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.ts'
import {ThemeProvider} from 'styled-components'

import { Signin } from './pages/signin/index'
import { Signup } from './pages/signup/index'
import { ErrorPage } from './pages/error'
import theme from './styles/theme.ts'

import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
    errorElement: <ErrorPage/> 
  },
  {
    path: "signup",
    element: <Signup/>
  }
])  

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
