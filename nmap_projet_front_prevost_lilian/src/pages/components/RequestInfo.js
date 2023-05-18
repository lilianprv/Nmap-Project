import React from "react"

const RequestInfo = ({ data }) => {
  const test = data.result
  const test2 = `${test}\n`
  return (
    <div>
      <ul>
        <li>
          <span className="font-bold">Adresse Ip: </span> {data.ip}
        </li>
        <li>
          <span className="font-bold">Option de scan: </span> {data.optionScan}
        </li>
        <li>
          <span className="font-bold">Option: </span> {data.option}
        </li>
        <li>
          <span className="font-bold">Paramètre de l'option: </span>
          {data.optionNumber}
        </li>
        <li>
          <span className="font-bold">Résultat: </span>
          {data.result.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index !== data.result.split("PORT").length - 1 && <br />}
            </React.Fragment>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default RequestInfo
