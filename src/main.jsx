import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/templates/Layout.jsx";
import WhosThatPokemon from "./components/templates/WhosThatPokemon.jsx";
import List from "./components/templates/List.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: WhosThatPokemon },
      { path: "list", Component: List },
    ],
  },
]);

import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster richColors />
    <RouterProvider router={router} />
  </>
);
