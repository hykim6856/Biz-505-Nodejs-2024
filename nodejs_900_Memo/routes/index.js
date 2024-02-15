import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  return res.redirect("/memo");

  res.render("index", { title: "hykim6856@naver.com" });
});

export default router;
