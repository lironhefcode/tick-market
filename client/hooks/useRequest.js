import axios from "axios"
import { useState } from "react"

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState([])
  const doRequest = async () => {
    try {
      setErrors(null)
      const response = await axios[method](url, body)
      if (onSuccess) {
        onSuccess(response.data)
      }
      return response.data
    } catch (err) {
      console.log(err)
      setErrors(
        <div className="alert alert-danger">
          <ul>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      )
    }
  }
  return { doRequest, errors }
}
