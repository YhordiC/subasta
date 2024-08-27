import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Sesion from './comṕonents/login/Sesion.jsx';
import './index.css'

const router = createBrowserRouter([
  {path:'/',
    element: (
      <Sesion />
    ),
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
