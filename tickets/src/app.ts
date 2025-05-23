import express from "express"
import "express-async-errors"
import { json } from "body-parser"

import { errorHandler, NotFoundError } from "@lironticket/common"
import cookieSession from "cookie-session"

const app = express()
app.set("trust proxy", true)
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
)

app.all("*", async (req, res) => {
  throw new NotFoundError()
})
app.use(errorHandler)
export { app }
