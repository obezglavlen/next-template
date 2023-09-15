'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Form } from '@/components/common/Form';
import { Typography } from '@/components/common/Typography';

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
    <Flex
      direction='col'
      className={twMerge(
        'p-4',
        'items-center',
        'justify-center',
        'min-h-full',
        'bg-primary dark:bg-secondary'
      )}
    >
      <Box className={twMerge('text-black')}>
        <Typography variant='h1' className='text-center'>Sign In</Typography>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Box>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6'
            >
              Email address
            </label>
            <input
              {...form.register('email')}
              placeholder='example@email.com'
              type='email'
              autoComplete='email'
              required
              className='w-full'
            />
          </Box>

          <Box>
            <Button.Default type='submit' className='mx-auto'>
              SignIn
            </Button.Default>
          </Box>
          {form.formState.errors.root?.server && (
            <Typography variant='body2' className={twMerge('text-red')}>
              {form.formState.errors.root.server.message}
            </Typography>
          )}
        </Form>
      </Box>
    </Flex>
  );
}
