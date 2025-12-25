import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/signin", (req, res) => {
  res.send("hello world");
});

app.post("/signup", (req, res) => {
  res.send("hello world");
});

app.get("/chat", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`HTTP Server listening on port ${PORT}`);
});
