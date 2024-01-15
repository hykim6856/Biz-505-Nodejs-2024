import express from "express";
const router = express.Router();

// router.get("/", () => {
//   req.send("GET");
// }); 중복된 명령어가 있으면 안됨.

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const st_name = req.query.name || "이름을 전달해주세요";
  const st_grade = req.query.grade || 0;
  const st_dept = req.query.dept || "학과를 전달해주세요";

  const student = {
    name: st_name,
    dept: st_dept,
    grade: st_grade,
  };

  res.render("users", student);
});

router.post("/", async (req, res) => {
  const { name, grade, dept } = req.body;
  res.render("users", { name, grade, dept });
});
export default router;
