import type { PlainObject } from '../typings';

export const useQueryParams = () => {
  const queryParams: PlainObject = {};
  const searchParams = window.location.search.slice(1).split('&');
  for (let param of searchParams) {
    const [key, value] = param.split('=');
    queryParams[key] = decodeURIComponent(value);
  }
  return queryParams;
};
