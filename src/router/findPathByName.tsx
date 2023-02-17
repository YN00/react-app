import { routes } from './index';

export const findPathByName = (menuName: string): string => {
  const i = routes[0].children.findIndex((route) => {
    return route.path.includes(menuName);
  });

  console.log(i)

  return routes[0].children[i].path;
};
