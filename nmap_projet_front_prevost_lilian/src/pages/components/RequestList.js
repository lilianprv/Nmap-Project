import React from "react"
import Link from "next/link"

const RequestList = ({ data }) => {
  return (
    <div>
      <ul>
        <li className="underline italic ">
          <Link href={`/components/RequestDetails?requestId=${data._id}`}>
            {data._id}{" "}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default RequestList
