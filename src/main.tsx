import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>
)
