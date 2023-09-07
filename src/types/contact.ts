import { z } from 'zod';

export const contactSchema = z.object({
  username: z.string().min(4).max(20),
  email: z.string().email(),
  isAcceptPolicy: z.literal(true),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type ContactResponse = {
  ok: boolean;
};
