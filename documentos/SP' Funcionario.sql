USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarFuncionario]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarFuncionario] @idFuncionario tinyint
AS
BEGIN
DECLARE @idFoto NVARCHAR(50)
SET @idFoto = (SELECT idFoto  FROM Funcionario where idFuncionario= @idFuncionario);

DELETE FROM [dbo].[Funcionario]
      WHERE idFuncionario=@idFuncionario
End

IF EXISTS (SELECT foto FROM Foto WHERE idFoto = @idFoto) 
BEGIN
   DELETE FROM [dbo].[Foto]
   WHERE idFoto=@idFoto
END
GO
/****** Object:  StoredProcedure [dbo].[getFuncionario]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getFuncionario] 
AS
SELECT fu.idFuncionario, fu.nombre, fu.apellidos, fu.fechaNacimiento, fu.idSexo, fu.loginName, fu.password, fu.idDepartamento, fo.foto
FROM Funcionario fu
LEFT JOIN Foto fo
ON fu.idFoto = fo.idFoto;
GO
/****** Object:  StoredProcedure [dbo].[getFuncionarioId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getFuncionarioId] @idFuncionario varchar(50)
AS
BEGIN

SELECT fu.idFuncionario, fu.nombre, fu.apellidos, fu.fechaNacimiento, fu.idSexo, fu.loginName, fu.password, fu.idDepartamento, fo.foto
FROM Funcionario fu
LEFT JOIN Foto fo
ON fu.idFoto = fo.idFoto
WHERE fu.idFuncionario= @idFuncionario
END
GO

/****** Object:  StoredProcedure [dbo].[ingresarFuncionario]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ingresarFuncionario] @nombre varchar(20), @apellidos varchar(20), @fechaNacimiento datetime, @idSexo tinyint, @loginName varchar(20), @password varchar(25), @foto varbinary(max) ,@idDepartamento tinyint
AS
BEGIN
DECLARE @contador NVARCHAR(50)
SET @contador = (SELECT COUNT(idFuncionario)FROM Funcionario)+1;

INSERT INTO [dbo].[Foto]
           ([foto])
     VALUES
           (@foto)
SET @contador = (SELECT idFoto TOP 1 * FROM Foto ORDER BY idFoto DESC);

INSERT INTO [dbo].[Funcionario]
           ([nombre]
           ,[apellidos]
           ,[fechaNacimiento]
           ,[idSexo]
           ,[loginName]
           ,[password]
           ,[idFoto]
           ,[idDepartamento])
     VALUES
           (<nombre, varchar(20),>
           ,<apellidos, varchar(20),>
           ,<fechaNacimiento, datetime,>
           ,<idSexo, tinyint,>
           ,<loginName, varchar(20),>
           ,<password, varchar(25),>
           ,<idFoto, smallint,>
           ,<idDepartamento, tinyint,>)
End
GO
/****** Object:  StoredProcedure [dbo].[modificarFuncionario]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarFuncionario] @idFuncionario tinyint, @descripcion varchar(50)
AS
BEGIN
UPDATE Funcionario
SET descripcion = @descripcion
WHERE idFuncionario=@idFuncionario
End
GO
