import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "./components/pages/LayoutClient";
import AdminLayout from "./components/pages/LayoutAdmin";
import Home from "./components/organisms/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [{
      index: true,
      element: <Home />
    }]
  },
  {
    path: "/admin",
    element: <AdminLayout />
  }
])

export default router