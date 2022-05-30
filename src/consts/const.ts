type TAppRoute = {
  [key: string]: { url: string, label: string },
};

export const AppRoutes: TAppRoute = {
  HOME: { url: '/', label: 'Все котики' },
  LIKES: { url: '/favorites', label: 'Любимые котики'}
};