import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
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
        email: { label: 'Email', type: 'email', placeholder: 'user_01@a.c' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (_credentials, _req) => {
        try {
          if (!_credentials) {
            return null;
          }
          const hashedPassword = await bcrypt.hash(_credentials.password, 1);
          const account = await prisma.account.findFirst({
            where: {
              user: {
                email: _credentials.email,
              },
            },
            include: { user: true },
          });
          if (account?.password !== hashedPassword) {
            return null;
          }
          return account.user;
        } catch (err) {
          console.error(err);
          throw err;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
};
