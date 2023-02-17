import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import TopMenus from '../components/common/TopMenus';

export const routes = [
  {
    path: '/',
    // loader: () => redirect('/home'),
    element: <TopMenus />,
    children: [
      {
        index: true,
        path: '/home',
        element: <Home />,
      },
      {
        path: '/analysis',
        element: null,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
