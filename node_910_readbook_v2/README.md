# NodeJS + Express + MySQL 프로젝트 2번째

- NodeJS 에서 MySQL 과 연동할때 기존의 방법능ㄹ 사용하지 않고, ORM(Object Relation Model, Mapping) 을 가용하여 DB핸들링 하기
- ORM 방식에서는 기본 CRUD 는 SQL 을 사용하지 않는다.

- ORM DB 핸들링을 하기 위해 dependency 설치하기
- `npm install sequelize`

## Sequelize ORM 프로젝트의 특징

- Model 객체를 잘 선언해 두면, table 을 자동으로 생성할 수 있다.
- 기본적인 `CRUD`를 실행할때는 SQL 을 사용할 필요가 없다.
- 복잡한 `SELECT(조회)`를 실행할때에는
