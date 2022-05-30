import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@consts/const';

const Navigation: React.FC = () => {

  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>(pathname);

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {Object.keys(AppRoutes).map((route: string, index: number) => {
          const {url, label} = AppRoutes[route];
          const isActive = Boolean(activeRoute === url);
          return (
          <li key={index} className={`nav__item ${isActive && 'nav__item--active'}`}>
            <Link to={url}>{label}</Link>
          </li>
          )
          })}
      </ul>
    </nav>
  )
};

export default Navigation;


