import { z } from 'zod';

export const contactPayload = z.object({
  username: z.string().min(4).max(20),
  email: z.string().email(),
  isAcceptPolicy: z.literal(true),
});

export type ContactPayload = z.infer<typeof contactPayload>;

export type ContactResponse = {
  ok: boolean;
};
