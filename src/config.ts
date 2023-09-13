import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

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
  adapter: PrismaAdapter(prisma),
};
