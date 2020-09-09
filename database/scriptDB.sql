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

create table tm_users (
	codusu int primary key identity(1,1),
	nomusu varchar(200),
	passusu varbinary(max)
)
go

insert into tm_users(nomusu, passusu) values ('cibertec01', PWDENCRYPT('123456'))
go

select * from tm_users where nomusu = 'cibertec01' and PWDCOMPARE('1234565', passusu) = 1
go

create proc usp_access
@nomusu varchar(200),
@passusu varchar(200)
as
begin
	set nocount on
	select codusu, nomusu from tm_users where nomusu = @nomusu and PWDCOMPARE(@passusu, passusu) = 1
end

exec usp_access 'cibertec01', '123456'