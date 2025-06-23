import { Request, Response, NextFunction } from "express"
// import jwt from "jsonwebtoken"

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).json({ message: "Unauthorized" })
    return
  }

  next()
}

// export const authMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "")

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" })
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!)
//     req.user = decoded
//     next()
//   } catch (error: unknown) {
//     let message = "Invalid token"
//     if (error instanceof Error) {
//       message = error.message
//     }
//     res.status(401).json({ message })
//   }
// }
