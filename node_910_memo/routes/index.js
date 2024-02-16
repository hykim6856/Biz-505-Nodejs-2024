import express from "express";
import moment from "moment";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  /*모멘트를 사용하여 현재 날짜와 시간을 문자열로getter */
  const toDate = moment().format("YYYY-MM-DD");
  const toTime = moment().format("HH:mm:ss");
  // 인덱스 퍼그를 렌더링할때 사용하도록 보내주기
  res.render("index", { toDate, toTime });
});

export default router;
