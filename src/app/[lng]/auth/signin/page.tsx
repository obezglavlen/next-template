'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';
import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
};

export default function Login() {
  const router = useRouter();
  const form = useForm({
    defaultValues,
  });
  const {} = getProviders();

  const loginEmail = async (data: typeof defaultValues) => {
    const result = await signIn('email', {
      email: data.email,
      redirect: false,
    });
    if (!result || result.error) {
      form.setError('root.server', {
        message: result?.error || 'Something went wrong',
      });
    } else {
      router.push(result.url || '/');
    }
  };

  const loginGoogle = async () => {
    const result = await signIn('google', {
      callbackUrl: '/',
    });
    if (!result || result.error) {
      form.setError('root.server', {
        message: result?.error || 'Something went wrong',
      });
    } else {
      router.push(result.url || '/');
    }
  };

  return <></>;
}
