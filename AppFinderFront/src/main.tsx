import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home/Home';
import App from './App';
import Consultas from './routes/consultas/Consultas';
import Consulta from './routes/consulta/Consulta';
import Mapa from './routes/mapa/Mapa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/consultas",
        element: <Consultas />
      },
      {
        path: "/consultas/:id",
        element: <Consulta />
      },
      {
        path: "consultas/:id/mapa",
        element: <Mapa />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
