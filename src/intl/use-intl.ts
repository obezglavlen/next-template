import { useCurrentLanguage } from './use-current-language';
import { get } from '@/utils/get';
import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';

export const useIntl = (): (($key: string) => string) => {
  const lang = useCurrentLanguage();

  const { data, refetch } = useQuery<Record<string, any>>([`/intl/${lang}.json`]);

  useEffect(() => {
    refetch();
  }, [lang, refetch]);

  const getValue = useCallback(
    (path: string): any => {
      return get(data, path);
    },
    [data]
  );

  return getValue;
};
