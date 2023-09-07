'use client';

import { Form, FormField } from '@/components/form';
import { contactApi } from '@/services/contact';
import { ContactPayload, contactPayload } from '@/types/contact';
import { z } from 'zod';

const fields: FormField[] = [
  {
    label: 'UserName',
    name: 'username',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
  },
  {
    label: 'Accept policy',
    name: 'isAcceptPolicy',
    type: 'checkbox',
  },
];

export const ContactForm = () => {
  const onSubmit = (data: ContactPayload) => {
    return contactApi.sendMessage(data);
  };

  return (
    <Form
      onSubmit={onSubmit}
      zodSchema={contactPayload}
      items={fields}
      defaultValues={{
        username: '',
        email: '',
        isAcceptPolicy: false,
      }}
    >
      <button>Submit</button>
    </Form>
  );
};
