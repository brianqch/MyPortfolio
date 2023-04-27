import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import App from "./routes/App";
import UserProfilePage from "./routes/UserProfilePage";
import NotFound from "./routes/NotFound";
import Navbar from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <NotFound />,
//     },
//     {
//       path: "/user-profile",
//       element: <UserProfilePage />,
//       errorElement: <NotFound />,
//     },
//     {
//       path: "/components/Navbar",
//       element: <Navbar />,
//       errorElement: <NotFound />,
//     }
//   ]);

//   createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
//   );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/> 
    </BrowserRouter>
  </React.StrictMode>

)