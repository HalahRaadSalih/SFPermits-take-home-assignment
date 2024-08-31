import { createRoot } from "react-dom/client";
import { MobileFoodFacilityPermit } from "./pages/MobileFoodFacilityPermit.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MobileFoodFacilityPermit />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </QueryClientProvider>
);
