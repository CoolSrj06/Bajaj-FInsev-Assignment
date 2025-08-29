import express from "express"
import cors from "cors"
import bfhlRouter from './routes/bfhl.routes.js'

const app = express()


app.use(cors())
app.use(express.json())

app.post("/bfhl", bfhlRouter)

export{
  app
}