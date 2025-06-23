import { LoginData, RegisterData, AuthResponse } from "../types/authTypes"
// import User from "../models/User"

const tokenBlacklist = new Set<string>()

class AuthService {
  async register(data: RegisterData): Promise<AuthResponse> {
    // const { email, password, username } = data

    // if (await User.findOne({ email })) {
    //   throw new Error("Email already in use")
    // }

    // const user = new User({ email, password, username })
    // await user.save()
    console.log(data)

    return this.generateAuthResponse()
  }

  async login(data: LoginData): Promise<AuthResponse> {
    // const { email, password } = data

    // const user = await User.findOne({ email }).select("+password")
    // if (!user || !(await user.comparePassword(password))) {
    //   throw new Error("Invalid credentials")
    // }
    console.log(data)

    return this.generateAuthResponse()
  }

  private generateAuthResponse(): AuthResponse {
    return {
      userId: "string",
      username: "string",
      token: "string",
      refreshToken: "string",
    }
  }

  // private generateAuthResponse(user: IUser): AuthResponse {
  //   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
  //     expiresIn: "1h",
  //   })

  //   const refreshToken = jwt.sign(
  //     { userId: user._id },
  //     process.env.JWT_REFRESH_SECRET!,
  //     { expiresIn: "7d" }
  //   )

  //   return {
  //     userId: user._id.toString(),
  //     username: user.username,
  //     token,
  //     refreshToken,
  //   }
  // }

  async logout(token: string): Promise<void> {
    if (!token) {
      throw new Error("No token provided")
    }

    try {
      // jwt.verify(token, process.env.JWT_SECRET!)
      tokenBlacklist.add(token)
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Invalid token")
      }
    }
  }

  // Добавьте метод для проверки токена
  static isTokenBlacklisted(token: string): boolean {
    return tokenBlacklist.has(token)
  }
}

export default new AuthService()
