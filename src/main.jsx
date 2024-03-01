import * as React from "react";
import './index.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ProtectedRoute from "./Components/ProtectedRoute";
import { CreateForm } from "./Components/Form";
import Dashboard from "./Pages/Dashboard"
import CategoryTask from "./Components/CategoryTask";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ProtectedRoute,
  },
  {
    path: "/addcategory",
    element: <CreateForm />,
    loader: ProtectedRoute,
  },
  {
    path: "/todolist",
    element: <Dashboard />,
    loader: ProtectedRoute,
  },
  {
    path: "/tester",
    element: <CategoryTask />,
    loader: ProtectedRoute,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);