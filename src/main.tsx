import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MobileFoodFacilityPermits } from "./pages/MobileFoodFacilityPermits";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MobileFoodFacilityPermits />,
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
