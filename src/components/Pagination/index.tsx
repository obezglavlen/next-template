import s from './styles.module.scss';
import { cn } from '@/css/cn';

type PaginationProps = {
  total: number;
  activePage: number;
  onChange: ($item: number) => void;
  prevButton?: boolean;
  nextButton?: boolean;
  showControls?: boolean;
};

export const Pagination = ({
  activePage,
  onChange,
  total,
  prevButton = true,
  nextButton = true,
  showControls = true,
}: PaginationProps) => {
  const firstPage = 1;
  const lastPage = total;
  const paginationItems =
    activePage != firstPage && activePage != lastPage
      ? [activePage - 1, activePage, activePage + 1]
      : activePage == firstPage
      ? [activePage, activePage + 1]
      : [activePage - 1, activePage];

  const handlePageChange = (page: number) => {
    if (page < firstPage) {
      onChange(firstPage);
    } else if (page > lastPage) {
      onChange(lastPage);
    } else onChange(page);
  };

  return (
    <ul className={s.pagination}>
      {prevButton && showControls && (
        <li key='prev' className={s.control}>
          <button
            onClick={() => handlePageChange(activePage - 1)}
            className={s.button}
          >
            &lt;
          </button>
        </li>
      )}
      {total > 3 && <>&hellip;</>}
      {paginationItems.map((item) => (
        <li
          key={item}
          className={cn(s.pageItem, {
            [s.active]: item == activePage,
          })}
        >
          <button className={s.button} onClick={() => handlePageChange(item)}>
            {item}
          </button>
        </li>
      ))}
      {total > 3 && <>&hellip;</>}
      {nextButton && showControls && (
        <li key='next' className={s.control}>
          <button
            onClick={() => handlePageChange(activePage + 1)}
            className={s.button}
          >
            &gt;
          </button>
        </li>
      )}
    </ul>
  );
};
