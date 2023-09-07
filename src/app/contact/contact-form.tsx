'use client';

import { FlexRow } from '@/components/flex';
import { Form, FormInput } from '@/components/form';
import { ContactPayload, contactSchema } from '@/types/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const onSubmit = (data: ContactPayload) =>
    fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }).then(
      (res) => res.json()
    );
  const { register, handleSubmit, formState, getValues } =
    useForm<ContactPayload>({
      mode: 'onBlur',
      resolver: zodResolver(contactSchema),
      defaultValues: {
        email: '',
        username: '',
        isAcceptPolicy: undefined,
      },
    });

  return (
    <Form handleSubmit={handleSubmit(onSubmit)} className='gap-6'>
      <FlexRow className="gap-10">
        <FormInput
          {...register('username')}
          type="text"
          label="Username"
          error={formState.errors.username?.message}
        />
        <FormInput
          {...register('email')}
          type="email"
          label="Email"
          error={formState.errors.email?.message}
        />
      </FlexRow>
      <FormInput
        {...register('isAcceptPolicy')}
        type="checkbox"
        label="Accept Policy"
        error={formState.errors.isAcceptPolicy?.message}
      />
      <button>Submit</button>
    </Form>
  );
};
