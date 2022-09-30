type TAppRoute = {
  [key: string]: { url: string, label: string },
};

export const AppRoutes: TAppRoute = {
  HOME: { url: '/', label: 'All cats' },
  FAVORITES: { url: '/favorites', label: 'My cats'}
};
