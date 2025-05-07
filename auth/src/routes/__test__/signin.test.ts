import { app } from "../../app"
import request from "supertest"

it("returns a 400 with an that do not exist email", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400)
})
it("returns a 400 with an invalid password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "password",
    })
    .expect(201)

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@gmail.com",
      password: "wrongpassword",
    })
    .expect(400)
})
it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "password",
    })
    .expect(201)

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@gmail.com",
      password: "password",
    })
    .expect(200)
  expect(response.get("Set-Cookie")).toBeDefined()
})
