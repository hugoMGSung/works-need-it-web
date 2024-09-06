const express = require("express");
const router = express.Router();
const db = require("../config/database");

// 게시글 목록 조회
router.get("/board", (req, res) => {
  const sqlQuery = `SELECT 	IDX,
                            TITLE,
                            CONTENT,
                            REG_ID,
                            DATE_FORMAT(REG_DATE, '%Y-%m-%d') AS REG_DATE,
                            MOD_ID,
                            DATE_FORMAT(MOD_DATE, '%Y-%m-%d') AS MOD_DATE
                          FROM  board`;
  //   const sqlQuery = "SELECT * FROM board";
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 게시글 생성
router.post("/board", (req, res) => {
  const postData = req.body;
  const sqlQuery =
    "INSERT INTO board (TITLE, CONTENT, REG_ID) VALUES (?,?, 'TestHugo')";
  db.query(sqlQuery, [postData.title, postData.content], (err, result) => {
    if (err) throw err;
    res.json({ message: "Post created", postId: result.insertId });
  });
});

// 게시글 수정
router.put("/board/:idx", (req, res) => {
  const { idx } = req.params;
  const upData = req.body;

  const sqlQuery = `UPDATE board SET 
                             TITLE = ? 
                            ,CONTENT = ?
                            ,MOD_ID = 'TestHugo'
                            ,MOD_DATE = now()
                      WHERE Idx = ?`;
  db.query(sqlQuery, [upData.title, upData.content, idx], (err, result) => {
    if (err) throw err;
    res.json({ message: "Post updated" });
  });
});

// 게시글 삭제
router.delete("/board/:idx", (req, res) => {
  const { idx } = req.params;
  const sqlQuery = "DELETE FROM board WHERE idx = ?";
  db.query(sqlQuery, idx, (err, result) => {
    if (err) throw err;
    res.json({ message: "Post deleted" });
  });
});

module.exports = router;
