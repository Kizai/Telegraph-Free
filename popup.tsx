import { useState } from "react"
import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <iframe className="iframe-container" src="https://telegraph-image-9gk.pages.dev/"></iframe>
  )
}

export default IndexPopup
