import axios from "axios"

const LandingPAge = ({ currentUser }) => {
  return <h1>Landing Paaaaaaaaaaage</h1>
}
LandingPAge.getInitalProps = async () => {
  const response = await axios.get("/api/users/currentuser")
  return response.data
}
export default Home
