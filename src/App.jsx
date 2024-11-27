
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import "./pages.css";

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
