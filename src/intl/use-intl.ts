import { useCurrentLanguage } from './use-current-language';
import { get } from '@/utils/get';
import { useCallback, useEffect } from 'react';
import useSWR from 'swr';

export const useIntl = (): (($key: string) => string) => {
  const lang = useCurrentLanguage();

  const { data, mutate } = useSWR<Record<string, any>>([`/intl/${lang}.json`]);

  useEffect(() => {
    mutate();
  }, [lang, mutate]);

  const getValue = useCallback(
    (path: string): any => {
      return get(data, path);
    },
    [data]
  );

  return getValue;
};
