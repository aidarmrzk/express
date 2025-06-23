import { Request, Response, NextFunction } from "express"

interface ErrorWithStatus extends Error {
  status?: number
}

export const notFoundHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  next({
    status: 404,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  })
}

export const errorMiddleware = (
  error: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(error.stack)
  const status = error.status || 500
  const message = status === 404 ? "Путь не найден" : "Что-то пошло не так"

  res.status(status).json({
    status,
    message,
  })
}
