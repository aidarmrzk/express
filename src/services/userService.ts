// import User from "../models/User"
import { RegisterData } from "../types/authTypes"

class UserService {
  async getUserById(id: string) {
    // const user = await User.findById(id).select("-password")
    // if (!user) {
    //   throw new Error("User not found")
    // }

    const user = id
    return user
  }

  async updateUser(id: string, updateData: RegisterData) {
    // const user = await User.findByIdAndUpdate(id, updateData, {
    //   new: true,
    // }).select("-password")

    // if (!user) {
    //   throw new Error("User not found")
    // }
    console.log(id, updateData)
    const user = id
    return user
  }

  async deleteUser(id: string) {
    // const user = await User.findByIdAndDelete(id)
    // if (!user) {
    //   throw new Error("User not found")
    // }

    console.log(id)
    return true
  }
}

export default new UserService()
