import nmapSchema from "../schemas/nmapSchema.js"
import mongoose from "mongoose"

const nmapModel = mongoose.model("PostTest", nmapSchema)

export default nmapModel
