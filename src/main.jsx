import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Home from "./components/Home";
import AddTea from "./components/AddTea";
import TeaDetails from "./components/TeaDetails";
import UpdateTea from "./components/UpdateTea";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTea",
        element: <AddTea></AddTea>,
      },
      {
        path: "/teas/:id",
        element: <TeaDetails></TeaDetails>,
        loader: ({ params }) =>
          fetch(`https://porcelain-teapot-server.vercel.app/teas/${params.id}`),
      },
      {
        path: "/updateTea/:id",
        element: <UpdateTea></UpdateTea>,
        loader: ({ params }) =>
          fetch(`https://porcelain-teapot-server.vercel.app/teas/${params.id}`),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
  </StrictMode>
);
