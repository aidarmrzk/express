import express from "express"
import router from "./routes"
import { notFoundHandler, errorMiddleware } from "./middlewares/errorMiddleware"

const app = express()

app.use("/", router)

// Базовый маршрут
app.get("/", (_req, res) => {
  res.json({ message: "success" })
})

// Middleware для обработки несуществующих путей
app.use(notFoundHandler)

// Подключаем errorMiddleware последним
app.use(errorMiddleware)

export default app
