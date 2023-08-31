"use client";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};
