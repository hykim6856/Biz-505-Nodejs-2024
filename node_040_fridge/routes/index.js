import express from "express";
import DB from "../models/index.js";
import moment from "moment";
import { Op } from "sequelize";

const router = express.Router();
const PRODUCT = DB.models.tbl_product;

/* GET home page. */
router.get("/", async (req, res, next) => {
  const today = moment().format("YYYY-MM-DD");
  /**
   * Js 에서 사용하는 데이트 라는 클래스가 있지만 사용이 매우 불쳔하다
   * 또한 날짜와 관련하여 여러 이슈가 있다.
   * 통상 js 에서는 moment 도구를 날자 관련하여 거의 표준처럼 사용한다
   *
   * 단순히 moment 를 실행하면 현재 날짜를 컴퓨터 표준 표시방식으로 보여준다.
   * .format() 함수를 더하여 원하는 형시그이 날짜 문자열로 만들 수 있다.
   *
   * .add(값,타입) : 현재날짜에 값을 더한 날짜 구하기
   * .subtract(값,타입) : 현재날짜에서 값을 뺀 날짜 구하기
   *
   *
   *
   */
  //오늘부터 5일 후 날짜를 기준으로 유통기한이 임박한 상품리스트를 보고싶다
  const exDate = moment().add(5, "days").format("YYYY-MM-DD");

  /**
   * Op.gt : greate then : 변수 > 값
   * Op.lt : less than : 변수 < 값
   * Op.gte : greate then and queal : 변수 >= 값
   * Op.gte : less then and queal : 변수 >= 값
   */
  const rows = await PRODUCT.findAll({
    where: {
      p_exdate: { [Op.lte]: exDate },
    },
    order: [
      ["p_date", "ASC"],
      ["p_exdate", "ASC"],
    ],
  });
  return res.json({ today, exDate, result: rows });
});

export default router;
