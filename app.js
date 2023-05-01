import express from "express";
import fetch from "node-fetch"
import cors from 'cors'

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello to cacheBackend")
})

app.get("/api", async (req, res) => {
  try {
    const response = await fetch(req.query.url)
    const data = await response.text()
    console.log("sending data")
    console.log(req.query.url)
    res.send(data)
  } catch(err) {
    res.send("There's some error, please check the URL and try again")
  }
  // console.log(data)
})

app.listen(3000, () => {
  console.log("cacheBackend listening on port 3000")
})