import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useQueryState = (key: string, defaultValue?: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(key);

  const [state, setState] = useState(currentValue ?? defaultValue ?? undefined);

  const handleSetState = (value: any) => {
    let _value = null;
    const newUrl = new URLSearchParams(searchParams.toString());
    if (!value) {
      setState(undefined);
      newUrl.delete(key);
    } else {
      if (typeof value === 'function') {
        _value = value(state);
      } else {
        _value = value;
      }

      setState(_value);
      newUrl.set(key, _value);
    }
    router.replace('?' + newUrl.toString(), { scroll: false });
  };

  return [state, handleSetState];
};
