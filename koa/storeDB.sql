/* 数据库设计 */

create database storeDB;
use storeDB;
create table users(
  user_id int primary key auto_increment,
  userName char (20) not null unique,
  password char (20) not null,
  userPhoneNumber char(11) null
);
-- insert into users
-- values(null, 'admin', '123456', '100861001010000');