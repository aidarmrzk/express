import { z } from "zod"
import authValidator from "./authValidator"

const { registerSchema } = authValidator()

export default function userValidator() {
  const updateUserSchema = z
    .object({
      id: z.number(),
      updateData: registerSchema,
    })
    .strict()

  return {
    updateUserSchema,
  }
}
