import express from "express";
import DB from "../models/index.js";

const STUDENT = DB.models.tbl_student;
const SUBJECT = DB.models.tbl_namesub;
const TEST = DB.models.tbl_test;
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const students = await STUDENT.findAll();
  res.render("index", {
    title: "학생 성적 처리 프로젝트",
    STUDENTS: students,
  });
});

router.get("/detail/:s_code", async (req, res, next) => {
  const s_code = req.params.s_code;
  const students = await STUDENT.findAll();
  const studentDetail = await STUDENT.findAll({
    where: { s_code: s_code },
  });
  const tests = await TEST.findAll({ where: { t_scode: s_code } });
  res.render("index", {
    title: "학생 성적 처리 프로젝트",
    STUDENTS: students,
    STUDENTDETAIL: studentDetail,
    TESTS: tests,
  });
});

export default router;
