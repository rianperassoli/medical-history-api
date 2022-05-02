import express from 'express'
import cors from 'cors'
import 'reflect-metadata';

const app = express()

app.use(cors())

app.get("/", async (request, response) => {
  return response.json({ message: "running" })
})

app.listen(3000, () => console.log("Server is running"));