// import { NextFunction } from "express"
// import mongoose, { Document, Schema } from "mongoose"
// import bcrypt from "bcryptjs"

// Интерфейс для TypeScript
export interface IUser extends Document {
  email: string
  password: string
  username: string
  createdAt: Date
  // comparePassword(candidatePassword: string): Promise<boolean>
}

// // Схема Mongoose
// const userSchema = new Schema<IUser>({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//     match: [
//       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//       "Invalid email format",
//     ],
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6,
//     select: false, // Исключаем по умолчанию из выборок
//   },
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 3,
//     maxlength: 30,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// // Хеширование пароля перед сохранением
// userSchema.pre<IUser>("save", async function (next: NextFunction) {
//   if (!this.isModified("password")) return next()

//   try {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
//   } catch (err) {
//     next(err as Error)
//   }
// })

// // Метод для сравнения паролей
// userSchema.methods.comparePassword = async function (
//   candidatePassword: string
// ): Promise<boolean> {
//   return bcrypt.compare(candidatePassword, this.password)
// }

// // Экспорт модели
// const User = mongoose.model<IUser>("User", userSchema)
// export default User
