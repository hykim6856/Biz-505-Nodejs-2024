import { createConnection } from "mysql2";
import mysql from "mysql2/promise";
/**
 * 디비 접속 정보를 다시 설정하고 이파일을 마이 에스큐엘.자스 로 이름변경후 프로젝트를 실행할것
 */
const mysql_info = {
  host: "localhost",
  post: "3306",
  user: "root",
  password: "000000",
  database: "bookdb2",
};

/**
 * 동기식으로 DB 연결 설정하기
 * async 로 시작하고 각 실행 함수 앞에 await 를 붙여주면
 * await 로 시작하는 함수가 완료될 때 까지 blocking 된다.
 */
const dbCreate = {
  init: async () => {
    const connection = (await mysql) / createConnection(mysql_info);
    return connection;
  },
};

export default dbCreate;
