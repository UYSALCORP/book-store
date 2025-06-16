import z from "zod";

export const registerSchema = z.object({
    name: z.string()
    .min(2, { message : "Name is required"}),
    email: z.string()
    .email({ message : "Email must be a valid email address"}),
    password: z.string()
    .min(8, { message : "Password must be at least 8 characters long"})
    .max(32, { message : "Password must not exceed 32 characters"}),
});

export type User = z.infer<typeof registerSchema>;