import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/templates/Layout.jsx';
import WhosThatPokemon from './components/pages/WhosThatPokemon.jsx';
import List from './components/pages/List.jsx';
import { Toaster } from 'sonner';
import PokemonInfo from './components/pages/PokemonInfo.jsx';
import { fetchPokemons } from './services/PokemonServices.js';
import ErrorComponent from './components/templates/ErrorComponent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: ErrorComponent,
    children: [
      {
        index: true,
        Component: WhosThatPokemon,
      },
      {
        path: 'list',
        Component: List,
        loader: async () => {
          console.log('Fetching initial data for List page');
          return {
            initialData: await fetchPokemons({ offset: 0, limit: 25 }),
          };
        },
      },
      { path: 'pokemon/:id', Component: PokemonInfo },
      { path: 'pokemon/error', Component: ErrorComponent },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <Toaster richColors />
    <RouterProvider router={router} />
  </>
);
