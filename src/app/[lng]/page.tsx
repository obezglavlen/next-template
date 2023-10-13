'use client';

import { usePagination } from '@/hooks/use-pagination';
import useSWR from 'swr';

export default function Home() {
  const { page, setPage, limit, setLimit } = usePagination();
  const {
    data: todos = [],
    error,
    isLoading,
  } = useSWR([
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`,
  ]);
  return (
    <>
      <section>
        {!isLoading && !error && (
          <div>
            Data:
            <pre>{JSON.stringify(todos, null, 2)}</pre>
          </div>
        )}
      </section>
      <input
        name='page'
        type='number'
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      <input
        name='limit'
        type='number'
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
    </>
  );
}
