create table event(
  id serial primary key,
  title varchar(50),
  date date,
  time timestamp,
  slots int,
  price decimal(4,2)
);

create table customer(
  id serial primary key,
  f_name varchar(50) primary key,
  l_name varchar(50) primary key,
  email varchar(50),
  number int
);

create table cart(
  id serial primary key,
  customer_id foreign key references customer.id,
  event_id foreign key references event.id,
  quantity int
  );