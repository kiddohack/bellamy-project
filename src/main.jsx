import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import Contacte from './pages/Contacts/ContactsPage.jsx'
import Lucrari from './pages/Works/WorksPage.jsx'
import About from './pages/About/AboutPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
