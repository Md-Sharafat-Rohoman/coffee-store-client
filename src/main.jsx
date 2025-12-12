import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import Header from './components/Header.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true, 
        loader: () => fetch('http://localhost:5000/coffee'),
        Component: Home
      },
      {
        path: '/header',
        Component: Header
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: '/coffee/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        Component : CoffeeDetails
      },
      {
        path: '/updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
