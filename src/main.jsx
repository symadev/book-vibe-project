import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import ErrorPge from './Component/ErrorPage/ErrorPge';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPge></ErrorPge>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
