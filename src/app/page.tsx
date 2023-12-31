'use client';

import { usePagination } from '@/hooks/use-pagination';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';

import { ScrollBar } from '@/components/common/ScrollBar';

import 'simplebar-react/dist/simplebar.min.css';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
};

export default function Home() {
  const { page, setPage, limit, setLimit } = usePagination(undefined, 3);
  const deferredPage = useDebounce(page, 300);
  const deferredLimit = useDebounce(limit, 300);
  const { data: users = [], error } = useQuery<User[]>({
    queryKey: [
      `https://jsonplaceholder.typicode.com/users?_limit=${deferredLimit}&_page=${deferredPage}`,
    ],
  });

  return (
    <>
      <section>
        Data:
        <ScrollBar style={{ height: 400 }} color='white'>
          {!error &&
            users.map((user) => {
              const avatarUrl = 'https://via.placeholder.com/600/';
              const sixRandomCharacter = Math.random().toString(36).slice(-6);
              return (
                <div
                  key={user.id}
                  style={{
                    padding: '1rem',
                    background: '#1f1f1f',
                    margin: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <Avatar
                      initials={user.name
                        .split(' ')
                        .map((w) => w[0])
                        .join('')}
                      src={avatarUrl + sixRandomCharacter}
                    /> */}

                    <strong style={{ marginLeft: '0.5rem' }}>
                      {user.name}
                    </strong>
                  </div>
                  <sub style={{ marginLeft: '2.5rem' }}>{user.email}</sub>
                </div>
              );
            })}
        </ScrollBar>
      </section>
      {/* <Pagination total={4} activePage={page} onChange={setPage} /> */}
    </>
  );
}
