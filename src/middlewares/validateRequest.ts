import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

export const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.issues, // Детали ошибок валидации
      })
      return
    }

    // Заменяем тело запроса на валидированные данные
    req.body = result.data
    next()
  }
