import { Response } from "express"
import userService from "../services/userService"
import { IRequest } from "../types/authTypes"

class UserController {
  async getCurrentUser(req: IRequest, res: Response) {
    const userId = req.user?.userId
    if (!userId) {
      return
    }

    try {
      const user = await userService.getUserById(userId)
      res.json(user)
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(404).json({ message: error.message })
      }
    }
  }

  async updateUser(req: IRequest, res: Response) {
    const userId = req.user?.userId
    if (!userId) {
      return
    }

    try {
      const updatedUser = await userService.updateUser(userId, req.body)
      res.json(updatedUser)
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }

  async deleteUser(req: IRequest, res: Response) {
    const userId = req.user?.userId
    if (!userId) {
      return
    }

    try {
      await userService.deleteUser(userId)
      res.json({ message: "User deleted successfully" })
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }
}

export default new UserController()
