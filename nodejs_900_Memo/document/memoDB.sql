CREATE DATABASE memodb;
use memodb;
CREATE TABLE tbl_memo(
m_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
m_author	VARCHAR(25)	NOT NULL	,
m_date	VARCHAR(10)	NOT NULL	,
m_time	VARCHAR(10)	NOT NULL	,
m_memo	VARCHAR(800)	NOT NULL	,
m_image	VARCHAR(250)		
		
);
SELECT * FROM tbl_memo;

INSERT INTO tbl_memo (m_author, m_date, m_time, m_memo)
VALUES ('홍길동', '2024-02-15', '15:30', '샘플메모');



