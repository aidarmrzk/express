import express from "express"
import { sum } from "./utils/sum"

const app = express()

app.get("/", (_req, res) => {
  console.log("sum", sum(5, 7))
  res.send("Hello World321!")
})

export default app
