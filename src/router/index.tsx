import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from '../components/Home/Home';

export const routes = [
  {
    path: '/',
    loader: () => redirect('/home'),
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/analysis',
    element: null,
  },
];

export const router = createBrowserRouter(routes);
