import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import About from './pages/About/AboutPage.jsx'
import Contacte from './pages/Contacts/ContactsPage.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Lucrari from './pages/Works/WorksPage.jsx'

const router = createBrowserRouter([
  {
    path: "/bellamy-project/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bellamy-project/despre",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bellamy-project/contacte",
    element: <Contacte />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bellamy-project/lucrari",
    element: <Lucrari />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
