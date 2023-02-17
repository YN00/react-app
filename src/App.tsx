import React from 'react';
import TopMenus from './components/common/TopMenus';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
