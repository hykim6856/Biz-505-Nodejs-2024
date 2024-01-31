import express from "express";
import DB from "../models/index.js";
const USER = DB.models.tbl_members;
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});

/**
 * 겟 유저/조인 으로 요청이 되면
 * 브라우저의 주소창에 입력한 후 엔터를 눌러 요청
 * 나브의 메뉴를 클릭할때
 * a 태그의 링크를 클릭할 때
 */
router.get("/join", async (req, res) => {
  res.render("users/join");
});
/**
 * 포스트 주소로 요청이 되면
 * 포스트 메서드 요청
 * 폼(메서드=포스트) 가 감싸고 있는 인풋 에 입력된 값을
 * http 바디에 담아 서버에 보낼때
 * 클라이언트가 데이터를 대량으로 보내면서
 * 이 데이터를 처리해 달ㄹ라ㅡㄴ ㄴ요청
 */
router.post("/join", async (req, res) => {
  /**
   * 회원가입요청이 들어오면
   * 현재 tbl_members table 에서 회원전체를 조회
   * 조회된 회원이 없으면 지금 요청된 회원이 ADMIN 이다
   * 그렇지 않으면 요청된 회원은 일반 USER 이다
   *
   * req.body 데이터에 m_role 이라는 속성을 생성하면서
   * 그 값에 ADMIN 또는 USER 라는 문자열을 저장한다
   *
   */
  const rows = await USER.findAll();
  if (rows.length > 0) {
    req.body.m_role = "USER";
  } else {
    req.body.m_role = "ADMIN";
  }
  const result = await USER.create(req.body);
  return res.json(result);
});

/**
 * 겟 유저네임/체크 주소 라는 요청이 되면
 * 사용자 정보가 테이블에 저장되어있냐 라는 것을 묻기
 * 있으면 메세지 파운드
 * 없으면 메세지 낫 파운드
 */
router.get("/:username/check", async (req, res) => {
  const username = req.params.username;
  const row = await USER.findByPk(username);
  if (row) {
    return res.json({ MESSAGE: "FOUND" });
  } else {
    return res.json({ MESSAGE: "NOT FOUND" });
  }
});

router.get("/login", (req, res) => {
  return res.render("users/login");
});

/**
 * 사용자가 로그인 화면에서 로그인을 실행하면
 * 요청을 처리할 라우터를 만들고
 * db 에서 사용자 정보를 조회 한 후
 * db 에 저장된 사용자 인지 아닌지 여부를 응답
 */
router.post("/login", async (req, res) => {
  const username = req.body.m_username;
  const password = req.body.m_password;

  const result = await USER.findByPk(username);
  if (!result) {
    return res.json({ MESSAGE: "USER NOT FOUND" });
  } else if (result.m_username === username && result.m_password !== password) {
    return res.json({ MESSAGE: "password wrong" });
  } else if (result.m_username === username && result.m_password === password) {
    return res.json({ MESSAGE: "login ok" });
  }
});

export default router;

/**
 * 회원가입 정책(policy)설정
 * 최초로 가입하는 회원은 ADMIN
 * ADMIN 은 현재 애플리케이션의 모든 기능을 다 사용할 수 있다
 *
 * 두번째 부터 가입하는 회원은 USER
 * USER 는 자신의 MyPage 와 일부 기능에만 제한적으로 접근할수 있다
 */
