import { useState } from "react"
import Router from "next/router"
import useRequest from "../../hooks/useRequest"
const SignUp = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: { email, password },
    onSuccess: () => {
      Router.push("/")
    },
  })
  const onSubmit = async (e) => {
    e.preventDefault()

    await doRequest()
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign in</h1>
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
      <button className="btn btn-primary">Sign in</button>
    </form>
  )
}

export default SignUp
