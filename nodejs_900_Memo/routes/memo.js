import express from "express";
import DB from "../models/index.js";
import moment from "moment";
import { upLoad } from "../modules/file_upload.js";
import { Op } from "sequelize";

const MEMO = DB.models.tbl_memo;
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const today = moment().format("YYYY-MM-DD");
  const now = moment().format("HH:mm:ss");

  try {
    const rows = await MEMO.findAll();
    return res.render("list", { today, now, memos: rows });
  } catch (error) {
    return res.json(error);
  }
});
router.get("/insert", async (req, res, next) => {
  const today = moment().format("YYYY-MM-DD");
  const now = moment().format("HH:mm:ss");

  try {
    const rows = await MEMO.findAll();
    return res.render("input", { today, now, memos: rows });
  } catch (error) {
    return res.json(error);
  }
});

router.post("/insert", upLoad.single("m_image"), async (req, res) => {
  return res.json({ body: req.body });
  const file = req.file;
  if (file) {
    req.body.m_image_name = file.fieldname;
    req.body.m_image_origin_name = file.originalname;
  }
  try {
    await MEMO.create(req.body);
    return res.redirect("/memo/");
  } catch (error) {
    return res.json(error);
  }
});

export default router;
