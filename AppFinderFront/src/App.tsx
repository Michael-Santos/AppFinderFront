import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import { Container } from '@mui/material';

function App() {

  return (
    <>
      <CssBaseline /> 
      <Header />
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
