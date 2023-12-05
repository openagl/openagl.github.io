import { useLocale } from 'dumi';
import { useCallback, useMemo } from 'react';
import { getLocalConfig } from '../config';
import { processLocalization } from '../utils';

export const useIntl = () => {
  const { id: lang } = useLocale();

  const intl = useCallback(
    (zh: string, en?: string) => {
      if (!en) return zh;
      if (lang !== 'zh-CN') return en;
      return zh;
    },
    [lang],
  );


  const processedConfig = processLocalization(getLocalConfig(), intl);

  const Messages = useMemo(() => {
    return {
      ...processedConfig,
    };
  }, [intl]);

  return {
    intl,
    Messages,
  };
};
