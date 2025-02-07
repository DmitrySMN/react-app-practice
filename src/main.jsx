import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Store from './store/store.js';
import Profile from './pages/profile/Profile.jsx';
import MovieDetails from './pages/movie-details/MovieDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>page not found</div>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
  },

  { path: '/profile', element: <Profile /> },
]);

const store = new Store();
export const Context = createContext({ store });

createRoot(document.getElementById('root')).render(
  <Context.Provider value={{ store }}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Context.Provider>,
);
