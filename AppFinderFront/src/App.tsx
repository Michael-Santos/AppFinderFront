import { Outlet } from 'react-router-dom';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <>
      <p>Navbar</p>
      <CssBaseline /> 
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
