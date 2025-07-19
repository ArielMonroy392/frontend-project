import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/templates/Layout.jsx";
import WhosThatPokemon from "./components/pages/WhosThatPokemon.jsx";
import List from "./components/pages/List.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: WhosThatPokemon },
      { path: "list", Component: List },
      { path: "pokemon/:id", Component: PokemonInfo },
    ],
  },
]);

import { Toaster } from "sonner";
import PokemonInfo from "./components/pages/PokemonInfo.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster richColors />
    <RouterProvider router={router} />
  </>
);
