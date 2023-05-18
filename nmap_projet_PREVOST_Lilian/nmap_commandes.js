import { spawn } from "node:child_process"

const nmap = spawn("nmap", ["172.27.192.1"])

nmap.stdout.on("data", (data) => {
  const proxySave = data.toString().trim()
  console.log(proxySave)
})

export default nmap

/* CREAT TEST COMMANDE A GARDER REPRISES D AVETIS
  app.post("/formulaire", async (req, res) => {
    const { port, state, service } = req.body
    const post = await nmapModel.create({
      port,
      state,
      service,
    })

    res.send({ result: post })
  }) 
  */
