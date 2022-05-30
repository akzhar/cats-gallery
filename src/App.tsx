import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import CatsPage from '@pages/CatsPage';
import LikesPage from '@pages/LikesPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.HOME.url} element={<Layout />}>
        <Route index element={<CatsPage/>} />
        <Route path={AppRoutes.LIKES.url} element={<LikesPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
