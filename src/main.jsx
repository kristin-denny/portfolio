import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';





// import ErrorPage from './pages/error.jsx';
// import AboutPage from './pages/about.jsx';
// import PortfolioPage from './pages/portfolio.jsx';
// import ContactPage from './pages/contact.jsx';
// import ResumePage from './pages/resume.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <AboutPage />,
//       },
//       {
//         path: 'portfolio',
//         element: <PortfolioPage />,
//       },
//       {
//         path: 'resume',
//         element: <ResumePage />,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
