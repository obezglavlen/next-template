import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials, req) => {
        const user = {
          id: "1",
          name: "Mykyta",
          email: "mykyta.statiev@gmail.com",
        };

        return user;
      },
    }),
  ],
};
