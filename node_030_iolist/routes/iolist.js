import express from "express";
import DB from "../models/index.js";
const IOLIST = DB.models.tbl_iolist;
const PRODUCTS = DB.models.tbl_products;
const DEPTS = DB.models.tbl_depts;
const router = express.Router();
// const dbConn = DB.init(); /**/

router.get("/", async (req, res) => {
  try {
    const rows = await IOLIST.findALL({
      include: [
        { model: PRODUCTS, as: "IO_상품" },
        { model: PRODUCTS, as: "IO_거래처" },
      ],
    });
    return res.render("iolist/list", { IOLIST: rows });
  } catch (error) {
    return res.json(error);
  }
});
router.get("/:io_seq/detail", async (req, res) => {
  return res.render("iolist/detail");
});

router.get("/count", async (req, res) => {
  const rows = await IOLIST.findALL();
  return res.json({ count: rows.length });
});
router.get("/insert", async (req, res) => {
  const user = req.session?.user;
  if (user) {
    return res.render("iolist/input");
  } else {
    const message = "로그인이 필요한 서비스 입니다.";
    return res.redirect(`/users/login?fail=${message}`);

    //   return res.render("iolist/insert");
  }
});

export default router;
