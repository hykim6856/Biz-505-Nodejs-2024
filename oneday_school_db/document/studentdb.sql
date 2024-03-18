create database studentdb;
use studentdb;

DROP TABLE tbl_student;
DROP TABLE tbl_namesub;
DROP TABLE tbl_test;

select * from tbl_student;
select * from tbl_namesub;
select * from tbl_test;

CREATE TABLE tbl_student (
    s_code VARCHAR(6) PRIMARY KEY,
    s_name VARCHAR(10) NOT NULL,
    s_dept VARCHAR(20),
    s_grade INT,
    s_tel VARCHAR(13),
    s_address VARCHAR(125)
);

CREATE TABLE tbl_namesub (
    n_subject VARCHAR(10) PRIMARY KEY,
    n_code VARCHAR(6)
);

CREATE TABLE tbl_test (
    t_scode VARCHAR(6),
    t_subject VARCHAR(10) NOT NULL,
    t_score INT,
    FOREIGN KEY (t_scode)
        REFERENCES tbl_student (s_code),
    FOREIGN KEY (t_subject)
        REFERENCES tbl_namesub (n_subject),
    PRIMARY KEY (t_scode , t_subject)
);

