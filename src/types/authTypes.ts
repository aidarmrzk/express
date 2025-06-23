import { Request } from "express"

// Данные для регистрации
export interface RegisterData {
  email: string
  password: string
  username: string
}

// Данные для входа
export interface LoginData {
  email: string
  password: string
}

// Ответ с токенами
export interface AuthResponse {
  userId: string
  username: string
  token: string
  refreshToken: string
}

// Декодированный JWT токен
export interface JwtPayload {
  userId: string
  iat?: number
  exp?: number
}

export interface IRequest extends Request {
  user?: JwtPayload
}
