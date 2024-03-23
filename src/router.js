import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "./components/pages/LayoutClient";
import AdminLayout from "./components/pages/LayoutAdmin";
import Home from "./components/organisms/Home";
import About from "./components/organisms/About";
import NewDefinitionFrom from "./components/organisms/NewDefinitonForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/new-word",
        element: <NewDefinitionFrom />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />
  }
])

export default router