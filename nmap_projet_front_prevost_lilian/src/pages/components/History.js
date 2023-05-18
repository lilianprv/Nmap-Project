import React, { useState } from "react"
import Link from "next/link"
import axios from "axios"
import RequestList from "./RequestList"

const History = () => {
  const [data, setData] = useState([])

  axios.get("http://localhost:5000/history").then((response) => {
    setData(response.data)
  })

  return (
    <div className="bg-gray-200">
      <header className=" text-center bg-gray-400 mb-4 rounded-lg mx-80">
        <h1 className="text-center ">Historique des requêtes</h1>
      </header>
      <main className="flex flex-col gap-7">
        {data.map((data) => (
          <RequestList key={data.id} data={data} />
        ))}
      </main>
      <footer className="text-center mt-4 rounded-lg mx-80 ">
        <h1 className="hover:underline">
          <Link href="/" className="bg-gray-400 rounded-xl px-6">
            Retour à l'acceuil
          </Link>
        </h1>
      </footer>
    </div>
  )
}

export default History
