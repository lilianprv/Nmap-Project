import nmapModel from "../../db/models/nmapModel.js"
import { spawn } from "child_process"
import cors from "cors"
import express from "express"

const routes = ({ app }) => {
  app.use(cors())

  //READ ALL
  app.get("/history", async (req, res) => {
    const commande = await nmapModel.find()

    res.send(commande)
  })

  //READ ONE
  app.get("/history/:requestId", async (req, res) => {
    const { requestId } = req.params

    try {
      const post = await nmapModel.findOne({ _id: requestId })

      if (!post) {
        res.status(404).send({ error: "Requêtes introuvable" })

        return
      }

      res.send({ result: post })
    } catch (err) {
      if (err.name === "CastError") {
        res.status(422).send({ error: "Invalid argument" })

        return
      }

      console.error(err)

      res.status(500).send({ error: "Oops. Something went wrong." })
    }
  })

  // DELETE
  app.delete("/history/:requestId", async (req, res) => {
    const { requestId } = req.params

    try {
      const post = await nmapModel.findOne({ _id: requestId })

      if (!post) {
        res.status(404).send({ error: "Not found" })

        return
      }

      await post.deleteOne()

      res.send({ result: "Element supprimé" })
    } catch (err) {
      if (err.name === "CastError") {
        res.status(422).send({ error: "Invalid argument" })

        return
      }

      console.error(err)

      res.status(500).send({ error: "Oops. Something went wrong." })
    }
  })

  //POST
  app.use(express.json())

  app.post("/add", async (req, res) => {
    const data_front = req.body
    console.log(data_front)

    const nmap = spawn("nmap", [
      data_front.fieldOptionScan,
      data_front.fieldOption,
      data_front.fieldOptionNumber,
      data_front.fieldIp,
    ])

    let saveResult = ""

    nmap.stdout.on("data", (data) => {
      saveResult += data.toString().trim()
    })

    nmap.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`)
      saveResult += data.toString().trim()
    })

    nmap.on("close", async (code) => {
      console.log(`child process exited with code ${code}`)
      const total = await nmapModel.create({
        ip: data_front.fieldIp,
        result: saveResult,
        optionScan: data_front.fieldOptionScan,
        option: data_front.fieldOption,
        optionNumber: data_front.fieldOptionNumber,
      })
      total.save()
      res.send({ result: total })
    })
  })
}

export default routes
