import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

const DeleteRequest = () => {
  const [deleting, setDelete] = useState(false)
  const router = useRouter()
  const { requestId } = router.query

  const handleDelete = async () => {
    setDelete(true)
    try {
      await axios.delete(`http://localhost:5000/history/${requestId}`)
    } catch (error) {
      console.error(error)
    }
    setDelete(false)
  }

  return (
    <div>
      <button
        className="bg-gray-400 rounded-xl px-6 py-1 float-right mr-16 hover:underline"
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting ? "Requête suppprimée !" : "Supprimer la requête"}
      </button>
    </div>
  )
}

export default DeleteRequest
