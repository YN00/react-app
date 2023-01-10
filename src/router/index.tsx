import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from '../components/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/home'),
  },
  {
    path: '/home',
    element: <Home />,
  },
]);
