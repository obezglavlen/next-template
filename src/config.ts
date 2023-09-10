import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'user_01' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (_credentials, _req) => {
        const user = { username: 'user_01', id: '1' };
        return user;
      },
    }),
  ],
};
