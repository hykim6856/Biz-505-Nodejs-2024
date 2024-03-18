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
  const subjects = await SUBJECT.findAll({
    order: [["n_code", "ASC"]],
  });
  const studentDetail = await STUDENT.findAll({
    where: { s_code: s_code },
  });
  const tests = await TEST.findAll({ where: { t_scode: s_code } });
  res.render("index", {
    title: "학생 성적 처리 프로젝트",
    STUDENTS: students,
    SUBJECTS: subjects,
    STUDENTDETAIL: studentDetail,
    TESTS: tests,
  });
});

router.post("/detail", async (req, res, next) => {
  const s_name = req.body.s_name;
  const students = await STUDENT.findAll();
  const subjects = await SUBJECT.findAll({
    order: [["n_code", "ASC"]],
  });
  const studentDetail = await STUDENT.findAll({
    where: { s_name: s_name },
  });
  const tests = await TEST.findAll({
    where: { t_scode: studentDetail.s_code },
  });
  res.render("index", {
    title: "학생 성적 처리 프로젝트",
    STUDENTS: students,
    SUBJECTS: subjects,
    STUDENTDETAIL: studentDetail,
    TESTS: tests,
  });
});

export default router;
