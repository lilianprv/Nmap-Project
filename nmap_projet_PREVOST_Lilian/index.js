import express from "express"
import mongoose from "mongoose"
import routes from "./api/routes/routes.js"
import config from "./config.js"
import cors from "cors"

const app = express()
app.use(cors())

const ctx = { app }

routes(ctx)

mongoose.connect(config.db.url, {
  useNewUrlParser: true,
})

// Connecting to the database
mongoose
  .connect(config.db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database")
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err)
    process.exit()
  })

app.listen(config.port, () => {
  console.log(`Le serveur est lancé sur le port ${config.port}`)
})
