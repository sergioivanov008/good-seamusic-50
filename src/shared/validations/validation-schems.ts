import { z } from 'zod';

export const emailSchema = z.string().email({ message: 'Invalid email address' });

export const passwordSchema = z.string()
  .min(8, { message: 'Minimum 8 characters' })
  .regex(/[a-z]/, { message: 'Must contain at least one lowercase letter' })
  .regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
  .regex(/\d/, { message: 'Must contain at least one number' })
  .regex(/[^A-Za-z0-9]/, { message: 'Must contain at least one special character' });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
