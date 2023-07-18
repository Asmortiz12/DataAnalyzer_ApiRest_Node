CREATE DATABASE student;

create table students( 
    identification  int primary key,
    names varchar(50),
    surnames varchar(50) 
);

insert into students (identification, names, surname) values (17540000, 'Alexander Sebastian', 'Ortiz Martinez');