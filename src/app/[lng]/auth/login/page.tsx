'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
};

export default function Login() {
  const router = useRouter();
  const form = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
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
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input
        placeholder='exam@ple.com'
        type='email'
        autoComplete='email'
        {...form.register('email')}
      />
      <input type='submit'>SignIn</input>
      {form.formState.errors.root?.server &&
        form.formState.errors.root.server.message}
    </form>
  );
}
