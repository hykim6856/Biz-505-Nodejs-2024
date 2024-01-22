import express from "express";
import DB from "../config/mysql.js";
const router = express.Router();
/**
 * db연결을 시도하는 DB.init() 함수는 async 키워드가 부착되었다.
 * 이 함수는 동기방식으로 실행되는데 일반적인 변수DB.init() 방식으로 return값을 받을 수 없다.
 * then 함수를 통하여 받아야한다.
 */
let dbConn = null;
// init () 함수에 async 가 설정되어있어 동기식으로 작동된다.
// 이 함수의 return 값을 받기 위해서는 then 함수를 통하여 받아야한다.
DB.init().then((connection) => (dbConn = connection));

router.get("/", (req, res) => {
  const sql = "SELECT * FROM tbl_books";
  dbConn
    .query(sql)
    .then((rows) => {
      return res.render("books/main", { books: rows });
    })
    .catch((err) => {
      return res.json(err);
    });
  // return res.render("books/main");
});

export default router;
