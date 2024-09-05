const express = require("express");
const cors = require("cors");

const app = express();
//app.use(cors());  // 모든 접근 허용
app.use(cors({ origin: "http://localhost:3000" }));
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql_p@ss",
  database: "reactBoard",
});

// 테스트 API
app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO test (rowno) VALUES (777)";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});

// List API
app.get("/list", (req, res) => {
  const sqlQuery = `SELECT 	IDX,
                            TITLE,
                            CONTENT,
                            REG_ID,
                            DATE_FORMAT(REG_DATE, '%Y-%m-%d') AS REG_DATE,
                            MOD_ID,
                            DATE_FORMAT(MOD_DATE, '%Y-%m-%d') AS MOD_DATE
                          FROM  board`;
  // "SELECT * FROM board"; // 최초
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
