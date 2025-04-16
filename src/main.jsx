import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './components/home/Home.jsx';

import Services from './components/services/Services.jsx';
import Projects from './components/projects/Projects.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contacts from './components/contact/Contacts.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
     
      {
        path: "/services",
        element:<Services/>,
      },{
        path: "/projects",
        element: <Projects />,
      },{
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/contacts",
        element: <Contacts/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
