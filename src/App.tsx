import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import CatsPage from '@pages/CatsPage';
import FavoritesPage from '@pages/FavoritesPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.HOME.url} element={<Layout />}>
        <Route index element={<CatsPage/>} />
        <Route path={AppRoutes.FAVORITES.url} element={<FavoritesPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
