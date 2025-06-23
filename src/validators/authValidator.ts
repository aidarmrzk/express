import { z } from "zod"

export default function userValidator() {
  const emailSchema = z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must be less than 100 characters" })

  const passwordSchema = z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must be less than 50 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    })

  const usernameSchema = z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(30, { message: "Username must be less than 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers and underscores",
    })

  const registerSchema = z
    .object({
      email: emailSchema,
      password: passwordSchema,
      username: usernameSchema,
    })
    .strict() // strict() запрещает дополнительные поля

  const loginSchema = z
    .object({
      email: emailSchema,
      password: z.string(),
    })
    .strict()

  return {
    registerSchema,
    loginSchema,
  }
}
