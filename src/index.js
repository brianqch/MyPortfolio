import React from "react";
import { createRoot } from "react-dom/client";

import UserProfilePage from "./routes/UserProfilePage";
import NotFound from "./routes/NotFound";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserProfilePage />,
      errorElement: <NotFound />,
    }
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );