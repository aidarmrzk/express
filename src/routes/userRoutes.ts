import { Router } from "express"
import userController from "../controllers/userController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { validateRequest } from "../middlewares/validateRequest"
import userValidator from "../validators/userValidator"

const { updateUserSchema } = userValidator()
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Управление пользователями
 */

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Получить текущего пользователя
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */
router.get("/me", authMiddleware, userController.getCurrentUser)

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Обновить данные пользователя
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */
router.put(
  "/",
  authMiddleware,
  validateRequest(updateUserSchema),
  userController.updateUser
)

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Удалить пользователя
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */
router.delete("/", authMiddleware, userController.deleteUser)

export default router
