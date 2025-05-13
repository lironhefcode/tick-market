import mongoose from "mongoose"
import { app } from "./app"
const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth")
  } catch (err) {
    console.error(err)
  }
}
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
if (!process.env.JWT_KEY) {
  throw new Error("JWT_KEY must be defined")
}
start()
