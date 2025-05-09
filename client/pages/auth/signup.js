import { useState } from "react"
import Router from "next/router"
import useRequest from "../../hooks/useRequest"
const SignUp = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },
    onSuccess: () => {
      Router.push("/")
    },
  })
  const onSubmit = async (e) => {
    e.preventDefault()

    doRequest()
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        ></input>
      </div>
      <div className="form-group">
        <label>password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        ></input>
      </div>
      {errors}
      <button className="btn btn-primary">Sign up</button>
    </form>
  )
}

export default SignUp
