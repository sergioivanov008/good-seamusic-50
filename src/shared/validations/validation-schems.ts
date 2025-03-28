import { z } from 'zod';

export const nameSchema = z
	.string()
	.min(8, { message: 'The name must contain at least 8 characters' })
	.max(20, { message: 'The name must contain a maximum of 20 characters' })
	.regex(/^[A-Za-z0-9._-]+$/, {
		message: 'The name can only contain Latin letters, numbers, ".", "-", "_"',
	});

export const emailSchema = z
	.string()
	.email({ message: 'Invalid email address' });

export const passwordSchema = z
	.string()
	.min(8, { message: 'Minimum 8 characters' })
	.regex(/[a-z]/, { message: 'Must contain at least one lowercase letter' })
	.regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
	.regex(/\d/, { message: 'Must contain at least one number' })
	.regex(/[^A-Za-z0-9]/, {
		message: 'Must contain at least one special character',
	});

export const loginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

export const registerSchema = z
	.object({
		name: nameSchema,
		email: emailSchema,
		password: passwordSchema,
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match',
	});

export const forgotPassStepOneSchema = z.object({
	email: emailSchema,
});

export const forgotPassStepThreeSchema = z
	.object({
		password: passwordSchema,
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match',
	});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type ForgotPassStepOneSchemaType = z.infer<
	typeof forgotPassStepOneSchema
>;
export type ForgotPassStepThreeSchemaType = z.infer<
	typeof forgotPassStepThreeSchema
>;
