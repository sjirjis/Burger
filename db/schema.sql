create database burgers_db;

use burgers_db;

create table burgers (
	id int auto_increment,
    primary key (id),
    burger_name varchar (128),
    devoured boolean,
    `date` TIMESTAMP    
);
