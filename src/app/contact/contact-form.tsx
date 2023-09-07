'use client';

import { PropsWithClassName } from '@/types';
import { ContactPayload, contactSchema } from '@/types/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Input, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useForm } from 'react-hook-form';

export const ContactForm = ({ className }: PropsWithClassName) => {
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
        message: '',
        isAcceptPolicy: undefined,
      },
    });

  console.log(getValues());

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={6}>
            <TextField
              {...register('email')}
              label="Email"
              id="email"
              fullWidth
              error={!!formState.errors.email}
              helperText={formState.errors.email?.message}
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              {...register('username')}
              label="Username"
              id="username"
              fullWidth
              error={!!formState.errors.username}
              helperText={formState.errors.username?.message}
            />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              {...register('message')}
              label="Message"
              id="message"
              multiline
              minRows={4}
              maxRows={10}
              fullWidth
              error={!!formState.errors.message}
              helperText={formState.errors.message?.message}
            />
          </Grid2>
          <Grid2 xs={8} direction={'row-reverse'} container sx={{ ml: 'auto' }}>
            <Grid2 xs={6}>
              <Button variant="outlined" type="submit" fullWidth>
                Submit
              </Button>
            </Grid2>
            <Grid2 xs={6}>
              <Button variant="outlined" type="button" fullWidth>
                Cancel
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};
