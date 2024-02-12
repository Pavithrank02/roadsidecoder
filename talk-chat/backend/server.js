const express = require("express");
const dotenv = require("dotenv")
const { chats } = require("./data/data");
const connectDb = require("./config/db");
const colors = require('colors')

const PORT = process.env.PORT || 5000

const app = express();
dotenv.config()
connectDb()
app.get("/", (req, res) => {
  res.send("API is running")
});
app.get("/api/chat", (req, res) => {
  res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {

  const singleChat = chats.find((c) => c.id === req.params.id);
  res.send(singleChat)

})
app.listen(PORT, console.log(`server is running in ${PORT}`.yellow.bold))
