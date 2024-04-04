import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PokemonProvider } from './hooks/usePokemon';
import { Home, Pokemon } from './pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
}
