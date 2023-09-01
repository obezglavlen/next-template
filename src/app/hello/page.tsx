'use client';

import { signOut, useSession } from 'next-auth/react';
import { NextPage } from 'next/types';
import { Posts } from './posts';

const Page: NextPage = () => {
  const session = useSession();
  return (
    <div>
      <div>
        You are authorized with credentials: {session?.data?.user?.name}
      </div>
      <button onClick={() => signOut()}>SignOut</button>;
      <a href="/api/auth/signin">Sign In</a>
      <Posts />
    </div>
  );
};

export default Page;
