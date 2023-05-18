import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import RequestInfo from "./RequestInfo"
import { useRouter } from "next/router"
import DeleteRequest from "./Delete"

const RequestDetails = () => {
  const [request, setRequest] = useState(null)
  const router = useRouter()
  const { requestId } = router.query

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { result },
        } = await axios.get(`http://localhost:5000/history/${requestId}`)
        console.log(result)
        setRequest(result)
      } catch (err) {
        return
      }
    })()
  }, [])

  return (
    <div className="bg-gray-200">
      <header className=" text-center bg-gray-400 mb-4 rounded-lg mx-80">
        <h1 className="text-center">Detail de la requête </h1>
      </header>
      <main className="flex flex-col gap-7">
        {request && <RequestInfo data={request} />}
        <DeleteRequest />
      </main>
      <footer className="text-center mt-4 rounded-lg  mx-80">
        <h1 className="hover:underline">
          <Link className="bg-gray-400 rounded-xl px-6" href="/">
            Retour à l'acceuil
          </Link>
        </h1>
        <h1 className="hover:underline mt-4">
          <Link
            className="bg-gray-400 rounded-xl px-6"
            href="/components/History"
          >
            Retour à l'historique
          </Link>
        </h1>
      </footer>
    </div>
  )
}
export default RequestDetails
