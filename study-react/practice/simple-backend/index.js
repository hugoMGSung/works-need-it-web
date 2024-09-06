const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
//app.use(cors());  // 모든 접근 허용
app.use(cors({ origin: "http://localhost:3000" }));
const PORT = process.env.port || 8000;

const boardRoutes = require("./routes/api");
app.use("/api", boardRoutes);

app.get("/", (reg, res) => {
  res.send("Hello, Node.js!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
