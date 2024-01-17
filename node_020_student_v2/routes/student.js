import mysql from "mysql2";
/**
 * express 프레임워크를 사용하여
 * 라우터 객체 생성
 */
import express from "express";
/**
 * mysql.hs 에서 선언하고 export 한 dbCreate를 임포트하여 DB 라는 이름으로 사용하겠다.
 */
import DB from "../config/mysql.js";
const router = express.Router();
// dbCreate 에 선언된 init() 함수를 호출하여
// return 된 정보를 dbConn 변수 (객체)에 저장하라
const dbConn = DB.init();

router.get("/", async (req, res) => {
  const sql = "SELECT * FROM tbl_student";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result);
      return res.render("student/list", { stList: result });
    }
  });
  // res.render("student/list");
});
//GET:loaclhost:3000/student/insert
router.get("/input", (req, res) => {
  res.render("student/input");
});

router.post("/input", (req, res) => {
  //폼을 통해 전달된, 전송된 데이터를 임시 변수에 저장해두기
  const st_num = req.body.st_num;
  const st_name = req.body.st_name;
  const st_dept = req.body.st_dept;

  //DB 에 인서트 하기 위해 배열타입으로 변환

  //폼.포스트의 인풋에 담긴 데이털르 받아서 배열로 생성
  const params = [st_num, st_name, st_dept];
  const sql = " INSERT INTO tbl_student(st_num, st_name, st_dept) " + " VALUES(?,?,?) ";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      //인서트가 성공한 경우 리스트 보여주는 화면으로 화면전환
      return res.redirect("/student");
    }
  });

  router.get("/:st_num.detail", (req, res) => {
    //주소 중간에 끼워진 학번을 st_num 변수를 통하여 받아라
    // 주소에 포함되어 전달된 ㅏㄱㅄ을 변수에 저장하기
    const st_num = req.params.st_num;
    const params = [st_num];
    const sql = "SELET * FROM tbl_student WHERE st_num =?";
    dbConn.query(sql, params, (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        // return res.json(result);
        return res.render("student/", { STD: result[0] }, "/detail");
      }
    });
  });
});
//라우터 객체를 다른곳에서 import 할 수 있도록 export 하기
export default router;
