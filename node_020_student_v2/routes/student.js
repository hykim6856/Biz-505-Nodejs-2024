/**
 * express 프레임워크를 사용하여
 * 라우터 객체 생성
 */
import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("student/list");
});

router.get("/input", (req, res) => {
  res.render("student/input");
});

//라우터 객체를 다른곳에서 import 할 수 있도록 export 하기
export default router;
