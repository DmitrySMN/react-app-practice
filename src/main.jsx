import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <div>page not found</div>
    },
    {
        path: '/login',
        element: <Login />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
