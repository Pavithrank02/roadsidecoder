const express = require("express");
const dotenv = require("dotenv")
const { chats } = require("./data/data");
const connectDb = require("./config/db");
const colors = require('colors')
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes")
const PORT = process.env.PORT || 5000

dotenv.config()

connectDb()
const app = express();

app.use(express.json())
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
app.use('/api/user', userRoutes)
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, console.log(`server is running in ${PORT}`.yellow.bold))
