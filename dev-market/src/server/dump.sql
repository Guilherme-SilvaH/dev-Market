create database devMarket;

create table if not exists users(
	id SERIAL primary Key,
	name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255)
);

INSERT INTO public.users(
	name, email, password)
	VALUES ('Guilherme', 'guilherme@gmail.com', 'gui1234');