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
router.get("/:m_seq/detail", async (req, res, next) => {
  const m_seq = req.params.m_seq;

  try {
    const rows = await MEMO.findAll({ where: { m_seq: m_seq } });
    return res.render("detail", { MEMOS: rows });

} catch (error) {
    return res.json(err);
}
  
});
router.get("/:m_seq/detail/delete", async (req, res, next) => {
  const m_seq = req.params.m_seq;
  
  try {
    await MEMO.destroy({ where: { m_seq: m_seq } });
    return res.redirect("/memo");
  } catch (error) {
    return res.json(error);
  }
});

router.get('/:m_seq/detail/update', async (req, res) => {
  const m_seq = req.params.m_seq;
  try {
    const rows = await MEMO.findAll({ where: { m_seq: m_seq } });
    return res.render("detailedit", { MEMOS: rows });

} catch (error) {
    return res.json(error);
}
 
});
router.post('/:m_seq/detail/update', async (req, res) => {
  const m_seq = req.params.m_seq;
  try {
    // return res.json({body: req.body});

    await MEMO.update(req.body,{where : {m_seq:m_seq}});
    return res.redirect(`/memo/${m_seq}/detail`);

      
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
  // return res.json({ body: req.body });
  const file = req.file;
  if (file) {
    req.body.m_image = file.filename;
  // return res.json({ body: req.file });

  }
  try {
    await MEMO.create(req.body);
    return res.redirect("/memo");
  } catch (error) {
    return res.json(error);
  }
});


export default router;
