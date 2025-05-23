import mongoose from "mongoose"
import { app } from "./app"
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined")
  }
  if (!process.env.MONOGO_URI) {
    throw new Error("MONGO_URI must be defined")
  }
  try {
    await mongoose.connect(process.env.MONOGO_URI, {})
  } catch (err) {
    console.error(err)
  }
}
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

start()
