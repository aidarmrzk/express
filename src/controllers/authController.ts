import { Request, Response } from "express"
import authService from "../services/authService"

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const result = await authService.register(req.body)
      res.status(201).json(result)
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await authService.login(req.body)
      res.json(result)
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(401).json({ message: error.message })
      }
    }
  }

  async logout(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1] || ""
      await authService.logout(token)
      res.json({ message: "Logout successful" })
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }
}

export default new AuthController()
