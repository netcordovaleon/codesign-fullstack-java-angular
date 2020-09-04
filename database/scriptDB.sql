create database springexample
go

use springexample
go

create table tm_products
(
  codprod int primary key identity(1,1),
  nomprod varchar(50) not null,
  descprod varchar(100),
  unidmedprod char(2),
  stockprod int not null default (0),
  preunitprod numeric(19,2) not null default (0),
  fecreg datetime default getdate(),
  estadoreg char(1) default 'A'
)
go

insert into tm_products (nomprod, descprod, unidmedprod, stockprod, preunitprod)
values
(
	'Laptop Toshida 256 SSD 4gb RAM Core I3', 
	'Disco duro solido capacidad 256 Memoria Ram 4gb expandible hasta 8gb, Monitor 16 pulgadas',
	'UN',
	10,
	1800.00
)
go

select * from tm_products
go