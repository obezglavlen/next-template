import { useParams } from 'next/navigation';
import { get } from 'radash';
import { useCallback, useEffect, useState } from 'react';

export const useIntl = () => {
  const params = useParams();
  const lang = params.lng;
  const [state, setState] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    fetch(`/intl/${lang}.json`)
      .then((res) => res.json())
      .then((t) => setState(t));
  }, [lang]);

  const getValue = useCallback(
    (path: string): any => {
      return get(state, path);
    },
    [state]
  );

  return getValue;
};
