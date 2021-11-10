-------------------------------- SP's Sexo--------
----------SP insertar----------
Alter PROCEDURE ingresarSexo @description varchar(50)
AS
BEGIN
DECLARE @contador NVARCHAR(50)
SET @contador = (SELECT COUNT(idSexo)FROM Sexo)+1;
INSERT INTO Sexo
           (idSexo
           ,descripcion)
     VALUES
           (@contador,@description)
End
Go

EXEC ingresarSexo @description= 'Prueba'
GO

----------SP listar----------
CREATE PROCEDURE getSexo 
AS
Select s.idSexo,s.descripcion
From Sexo as s
GO

EXEC getSexo
GO

----------SP eliminar----------
CREATE PROCEDURE eliminarSexo @idSexo tinyint
AS
BEGIN
DELETE FROM Sexo WHERE idSexo= @idSexo
End
Go

EXEC eliminarSexo @idSexo= 4
GO

----------SP modificar----------

Alter PROCEDURE modificarSexo @idSexo tinyint, @descripcion varchar(50)
AS
BEGIN
UPDATE Sexo
SET descripcion = @descripcion
WHERE idSexo=@idSexo
End
GO

EXEC modificarSexo @idSexo= 4, @descripcion= 'Prueba Modificacion'
GO