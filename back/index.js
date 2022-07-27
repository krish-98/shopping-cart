const express = require("express")
const cors = require("cors")

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to our Shop API!")
})

app.get("/products", (req, res) => {
  res.send(["$23", "Malik", "User"])
})

const port = process.env.PORT || 5000
app.listen(port, console.log(`Server running on port ${port}`))
