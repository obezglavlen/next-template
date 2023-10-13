import { useQueryState } from './use-query-state';

export const usePagination = (defaultPage = 1, defaultLimit = 10) => {
  const [page, setPage] = useQueryState('page', defaultPage);
  const [limit, setLimit] = useQueryState('limit', defaultLimit);

  return { page, limit, setPage, setLimit };
};
