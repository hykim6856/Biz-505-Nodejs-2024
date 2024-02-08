DROP DATABASE fridgeDB;
CREATE DATABASE fridgeDB;
USE fridgeDB;

CREATE TABLE tbl_fridge(
f_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
f_name	VARCHAR(10)	NOT NULL	,
f_div	VARCHAR(4)		,
f_memo	VARCHAR(125)	,	
f_photo	VARCHAR(255)	,	
f_image_name	VARCHAR(255),		
f_image_origin_name	VARCHAR(255)			
);

CREATE TABLE tbl_product(
p_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
p_fseq	INT	NOT NULL	,
p_name	VARCHAR(125)	NOT NULL	,
p_exdate	VARCHAR(12)	NOT NULL	,
p_quan	INT	NOT NULL	,
p_date	VARCHAR(12)	NOT NULL	,
p_memo	VARCHAR(125)			
);

-- 오늘날짜에서 10일전부터 임의 날짜에 상품구매
-- 유통기간 : 구입일로부터 5~15범위의 임의의 날짜 생성

CREATE TABLE tbl_shopping (
s_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
s_name	VARCHAR(125)	NOT NULL	,
s_quan	INT	NOT NULL	,
s_ox	INT		
);

CREATE TABLE tbl_user(
u_id	VARCHAR(35)		PRIMARY KEY,
u_pw	VARCHAR(255)	NOT NULL	,
u_name	VARCHAR(35)	NOT NULL	,
u_role	VARCHAR(35)	NOT NULL	
);

DROP TABLE tbl_user;

-- 외래키 설정
ALTER TABLE tbl_product
ADD CONSTRAINT FK_PSEQ
FOREIGN KEY (p_fseq)
REFERENCES tbl_fridge(f_seq);


-- ps_role 추가
INSERT INTO tbl_user(u_name, u_id, u_pw , u_role) VALUES('운영자', 'fridge', 'fridge','USER');
