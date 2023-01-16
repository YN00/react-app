import { routes } from './index';

export const findPathByName = (menuName: string): string => {
  const i = routes.findIndex((route) => {
    return route.path.includes(menuName);
  });

  return routes[i].path;
};
