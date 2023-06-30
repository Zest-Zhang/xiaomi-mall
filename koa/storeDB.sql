
--  数据库设计
-- 创建数据库 storeDB
create database storeDB;
-- 切换到 storeDB
use storeDB;
-- 创建表 users
create table users(
    -- 主键字段，采用自增模式
    user_id int primary key auto_increment,
    -- 用户名字段，长度为 20 字符，不允许为空，且必须唯一
    userName char (20) not null unique,
    -- 密码字段，长度为 20 字符，不允许为空
    password char (20) not null,
    -- 手机号字段，长度为 11 字符，允许为空
    userPhoneNumber char(11) null
);
-- insert into users
-- values(null, 'admin', '123456', '100861001010000');