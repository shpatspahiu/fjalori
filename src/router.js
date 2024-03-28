import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "./components/pages/LayoutClient";
import AdminLayout from "./components/pages/LayoutAdmin";
import Home from "./components/organisms/Home";
import About from "./components/organisms/About";
import CardForm from "./components/organisms/CardForm";
import Login from "./components/organisms/Login";
import Register from "./components/organisms/Register";

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
        path: "about",
        element: <About />
      },
      {
        path: "new-word",
        element: <CardForm />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />
  }
])

export default router