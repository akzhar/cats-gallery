import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '@components/Navigation';
import Message from '@components/Message';

const Layout: React.FC = () => (
  <div className="layout">
    <Navigation/>
    <main className="layout__content">
      <Outlet/>
    </main>
    <Message/>
  </div>
);

export default Layout;
