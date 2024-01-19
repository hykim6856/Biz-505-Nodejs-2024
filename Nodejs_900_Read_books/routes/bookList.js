import express from "express";

import DB from "../config/mysql.js";
const router = express.Router();
const dbConn = DB.init();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM tbl_books";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("bookList/list", { stList: result });
    }
  });
});

router.get("/insert", (req, res) => {
  res.render("bookList/input.pug");
});

router.post("/insert", (req, res) => {
  // form 데이터를 변수에 저장해 두기
  const isbn = req.body.isbn;
  const title = req.body.title;
  const author = req.body.author;
  const author1 = req.body.author1;
  const page = req.body.page;
  const publisher = req.body.publisher;
  const price = req.body.price;
  const discount = req.body.discount;
  const descriptions = req.body.descriptions;
  const pubdate = req.body.pubdate;
  const link = req.body.link;
  const image = req.body.image;

  const params = [isbn, title, author, publisher, price, discount, descriptions, pubdate];
  const sql = " INSERT INTO tbl_books(isbn, title, author, publisher, price, discount, descriptions, pubdate) " + " VALUES(?,?,?,?,?,?,?,?)";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/bookList");
    }
  });
});

router.get("/:bookList/detail", (req, res) => {
  const isbn = req.params.isbn;
  console.log(isbn);
  const params = [isbn];
  const sql = " SELECT * FROM tbl_books WHERE isbn = ? ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("bookList/detail", { STD: result[0] });
    }
  });
});

router.get("/:isbn/check", (req, res) => {
  const isbn = req.params.isbn;
  const sql = " SELECT isbn FROM tbl_books WHERE isbn = ? ";
  dbConn.query(sql, [isbn], (err, result) => {
    if (err) {
      return res.json({ result: "ERROR", message: err });
    } else {
      if (result.length > 0) {
        return res.json({ result: "있다", STD: result[0] });
      } else {
        return res.json({ result: "없다", STD: null });
      }
    }
  });
});

router.get("/:isbn/delete", (req, res) => {
  const isbn = req.params.isbn;
  const sql = " DELETE FROM tbl_books WHERE isbn = ? ";
  dbConn.query(sql, [isbn], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/bookList/");
    }
  });
});
//localhost:3000/bookList/학번/update
// form tag 의  action 이 자동으로 URL 이 설정됨
router.get("/:isbn/update", (req, res) => {
  const isbn = req.params.isbn;
  const sql = " SELECT * FROM tbl_books WHERE isbn = ? ";
  dbConn.query(sql, [isbn], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("bookList/insert", { STD: result[0] }); //수정예정
    }
  });
});

router.post("/:isbn/update", (req, res) => {
  const isbn = req.params.isbn;
  const title = req.body.title;
  const author = req.body.author;
  const publisher = req.body.publisher;
  const price = req.body.price;
  const discount = req.body.discount;
  const descriptions = req.body.descriptions;
  const pubdate = req.body.pubdate;
  const link = req.body.link;
  const image = req.body.image;

  const params = [title, author, publisher, price, discount, descriptions, pubdate, link, image, isbn];

  const sql =
    " UPDATE tbl_books " +
    "SET title = ?, " +
    " author = ?, " +
    " publisher = ?, " +
    " price = ?, " +
    " discount = ? " +
    " descriptions = ? " +
    " pubdate = ? " +
    " link = ? " +
    " image = ? " +
    " WHERE isbn = ? ";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect(`/bookList/${isbn}/detail`);
    }
  });
});

// router 객체를 다른곳에서 import 할수 있도록 export 하기
export default router;
