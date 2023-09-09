import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { QueryClient } from 'react-query';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'user_01' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const user = { username: 'user_01', id: '1' };
        return user;
      },
    }),
  ],
};
