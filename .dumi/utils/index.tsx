import { isObject, isArray } from 'lodash';
import type { PlainObject, Intl } from '../typings';

const localizeArrayItems = (array: PlainObject[], translator: Intl) =>
  array.map((item) => {
    const { title, description, imgUrl, children } = item;
    return {
      ...item,
      title: translator(title?.zh, title?.en),
      description: translator(description?.zh, description?.en),
      imgUrl:
        typeof imgUrl === 'string'
          ? imgUrl
          : translator(imgUrl?.zh, imgUrl?.en),
      children: isArray(children)
        ? children.map((cItem) => ({
            title: translator(cItem.title.zh, cItem.title.en),
            children: isArray(cItem.children)
              ? cItem.children.map((ccItem) => translator(ccItem.zh, ccItem.en))
              : [],
            imgUrl:
              typeof cItem.imgUrl === 'string'
                ? cItem.imgUrl
                : translator(cItem.imgUrl?.zh, cItem.imgUrl?.en),
          }))
        : [],
    };
  });

export const processLocalization = (config: PlainObject, intl: Intl) => {
  const result: PlainObject = {};
  Object.keys(config).forEach((key) => {
    const itemValue = config[key];
    if (isObject(itemValue) && itemValue.zh && itemValue.en) {
      result[key] = intl(itemValue.zh, itemValue.en);
    } else if (isArray(itemValue)) {
      result[key] = localizeArrayItems(itemValue, intl);
    } else {
      result[key] = itemValue;
    }
  });
  return result;
};
