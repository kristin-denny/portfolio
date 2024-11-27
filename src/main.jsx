import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './index.css';

// 
import ErrorPage from './pages/error.jsx';
import AboutPage from './pages/about.jsx';
import PortfolioPage from './pages/portfolio.jsx';
import ContactPage from './pages/contact.jsx';
import ResumePage from './pages/resume.jsx';

// 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
