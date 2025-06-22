import express from "express"
import { sum } from "./utils/sum"

const app = express()
const port = 3000

app.get("/", (_req, res) => {
  console.log("sum", sum(5, 7))
  res.send("Hello World321!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
