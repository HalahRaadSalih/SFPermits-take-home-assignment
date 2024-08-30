import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileFoodFacilityPermit } from "./pages/MobileFoodFacilityPermit.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MobileFoodFacilityPermit />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>
);
