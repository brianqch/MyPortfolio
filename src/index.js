import React from "react";
import { createRoot } from "react-dom/client";

import App from "./routes/App";
import UserProfilePage from "./routes/UserProfilePage";
import NotFound from "./routes/NotFound";
import Navbar from "./components/Navbar";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
    },
    // {
    //   path: "/",
    //   element: <UserProfilePage />,
    //   errorElement: <NotFound />,
    // },
    // {
    //   path: "/components/Navbar",
    //   element: <Navbar />,
    //   errorElement: <NotFound />,
    // }
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );