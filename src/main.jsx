import React from 'react'
import ReactDOM from 'react-dom/client'
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
import PricingPage from './pages/PricingPage';

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
    path: "/Pricing",
    element: <PricingPage />,
    errorElement: <ErrPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
