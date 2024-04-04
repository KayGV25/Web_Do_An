import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//importing css
import './index.css'

//importing jsx page
import HomePage from './pages/HomePage';
import ErrPage from './pages/ErrPage';
import SupportPage from './pages/SupportPage';
import CustomerServicePage from './pages/CustomerServicePage';

// Add routing to different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrPage />,
  },
  {
    path: "Support",
    element: <SupportPage />
  },
  {
    path: "CustomerService",
    element: <CustomerServicePage />,
    errorElement: <ErrPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
