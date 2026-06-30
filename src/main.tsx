import { createRoot } from 'react-dom/client'
import './app/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './app/layout';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: "",
    element: <Home />,
  },]
}]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
