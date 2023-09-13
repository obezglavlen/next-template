'use client';

import { Flex } from './common/Flex';
import { useQueryState } from '@/hooks/useQueryState';

export const Temp = () => {
  const [query, setQuery] = useQueryState('query');
  const [page, setPage] = useQueryState('page');

  return (
    <Flex direction='col'>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <input
        value={page}
        onChange={(e) => {
          setPage(e.target.value);
        }}
      />
    </Flex>
  );
};
