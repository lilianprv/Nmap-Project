import mongoose from "mongoose"
import nmapSchema from "../../db/schemas/nmapSchema.js"

mongoose.connect("mongodb://127.0.0.1:27017/nmap_projet")

const ajout = mongoose.model("nmapModel", nmapSchema)

const test_bdd = new ajout({ port: "BBBB", state: "aaaa", service: "aaaa" })
test_bdd.save()


