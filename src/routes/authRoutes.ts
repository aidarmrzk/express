import { Router } from "express"
import authController from "../controllers/authController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { validateRequest } from "../middlewares/validateRequest"
import authValidator from "../validators/authValidator"

const { registerSchema, loginSchema } = authValidator()
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Аутентификация и авторизация
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Регистрация нового пользователя
 *     tags: [Auth]
 */
router.post(
  "/register",
  validateRequest(registerSchema),
  authController.register
)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Вход в систему
 *     tags: [Auth]
 */
router.post("/login", validateRequest(loginSchema), authController.login)

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Выход из системы
 *     tags: [Auth]
 */
router.post("/logout", authMiddleware, authController.logout)

export default router
