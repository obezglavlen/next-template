'use client';

import { usePagination } from '@/hooks/use-pagination';
import useSWR from 'swr';
import { useDebounce } from 'usehooks-ts';

import { Avatar } from '@/components/Avatar';
import { Input } from '@/components/common/Input';
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
  const { page, setPage, limit, setLimit } = usePagination();
  const deferredPage = useDebounce(page);
  const deferredLimit = useDebounce(limit);
  const { data: users = [], error } = useSWR<User[]>([
    `https://jsonplaceholder.typicode.com/users?_limit=${deferredLimit}&_page=${deferredPage}`,
  ]);

  return (
    <>
      <section>
        Data:
        <ScrollBar style={{ maxHeight: 400 }} color='white'>
          {!error &&
            users.map((user) => {
              const avatarUrl = 'https://via.placeholder.com/600/';
              const sixRandomCharacter = Math.random().toString(36).slice(-6);
              return (
                <div
                  key={user.id}
                  style={{
                    padding: '2rem',
                    background: '#1f1f1f',
                    margin: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      initials={user.name
                        .split(' ')
                        .map((w) => w[0])
                        .join('')}
                      src={avatarUrl + sixRandomCharacter}
                    />

                    <strong style={{ marginLeft: '0.5rem' }}>
                      {user.name}
                    </strong>
                  </div>
                  <sub style={{ marginLeft: '2.5rem' }}>{user.email}</sub>
                  <pre>{JSON.stringify(user.address, null, 2)}</pre>
                </div>
              );
            })}
        </ScrollBar>
      </section>
      <Input
        name='page'
        type='number'
        onChange={(e) => setPage(e.target.value)}
        value={page}
      />
      <Input
        name='limit'
        type='number'
        onChange={(e) => setLimit(e.target.value)}
        value={limit}
      />
    </>
  );
}
