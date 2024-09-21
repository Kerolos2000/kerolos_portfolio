import { z } from 'zod';

export const contactSchema = z.object({
	email: z.string().email({ message: 'Make sure to write a valid email' }),
	message: z.string().min(50),
	name: z.string().min(3),
	subject: z.string().min(10),
});
