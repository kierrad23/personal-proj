CREATE TABLE students
(
    student_id SERIAL PRIMARY KEY NOT NULL,
    first_name varchar(40),
    last_name varchar(40),
    location varchar(80),
    age integer,
    grade integer,
    description varchar(40),
    picture text,
    favorite_tutor varchar(40),
    favorite_subjects varchar(40)
);

CREATE TABLE tutor
(
    tutor_id SERIAL PRIMARY KEY NOT NULL,
    first_name varchar(40),
    last_name varchar(40),
    location varchar(80),
    age integer,
    years_experience integer,
    class_subject varchar(40),
    picture text
);