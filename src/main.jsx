import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  HashRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import About from './pages/About/AboutPage.jsx'
import Contacte from './pages/Contacts/ContactsPage.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Lucrari from './pages/Works/WorksPage.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/despre",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacte",
    element: <Contacte />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lucrari",
    element: <Lucrari />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>,
)
