import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "./components/pages/LayoutClient";
import AdminLayout from "./components/pages/LayoutAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />
  },
  {
    path: "/admin",
    element: <AdminLayout />
  }
])

export default router