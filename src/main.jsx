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
import BookDetails from './Component/BookDetails/BookDetails';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        path: "listedBooks",
        element:<ListedBooks></ListedBooks>,
        ///the worse ay to load some data
        loader:()=> fetch('/booksData.json'),
      },
      {
        path: "books/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=> fetch('/booksData.json'),
        //do not load all the books for one books
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
    <ToastContainer />
  </StrictMode>,
)
