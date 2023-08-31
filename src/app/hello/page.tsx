import { SignOutButton } from '@/components/signOutButton';
import { getServerSession } from 'next-auth';
import { NextPage } from 'next/types';

const Page: NextPage = async () => {
  const session = await getServerSession();
  return (
    <div>
      <div>You are authorized with credentials: {session?.user?.name}</div>
      <SignOutButton />
      <a href="/api/auth/signin">Sign In</a>
    </div>
  );
};

export default Page;
