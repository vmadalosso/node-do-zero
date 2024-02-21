import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()

const database = new DatabaseMemory()

server.post("/videos", (request, reply) => {
  database.create({
    title: "Video 81",
    description: "Esse eh o video 81",
    dutation: 100,
  })

  console.log(database.list())

  return reply.status(201).send()
})

server.get("/videos", () => {
  return "Hellow World"
})

server.put("/videos/:id", () => {
  return "Hellow nodeJS"
})

server.delete("/videos/:id", () => {
  return "Hellow nodeJS"
})

server.listen({
  port: 3333,
})
