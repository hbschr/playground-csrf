const express = require("express")
const fs = require("fs")
const path = require("path")

const lorienPort = 3000
const lorien = express()
const mordorPort = 3001
const mordor = express()


lorien.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./lorien.html"))
})

lorien.get("/lorien.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./lorien.js"))
})

mordor.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./mordor.html"))
})

mordor.get("/mordor.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./mordor.js"))
})

lorien.listen(lorienPort, () => {
  console.log(`lorien listening on port ${lorienPort}`)
})

mordor.listen(mordorPort, () => {
  console.log(`mordor listening on port ${mordorPort}`)
})
