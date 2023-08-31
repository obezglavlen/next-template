"use client";

import { signOut } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface ButtonProps {}

export const SignOutButton: FC<ButtonProps & PropsWithChildren> = ({
  children,
}) => {
  return <button onClick={() => signOut()}>{children}</button>;
};
