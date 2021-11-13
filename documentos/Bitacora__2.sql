USE [IF6201_B53953_B63817_]
GO

/****** Object:  StoredProcedure [dbo].[ingresarBitacora]    Script Date: 13/11/2021 04:15:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

Alter PROCEDURE [dbo].[ingresarBitacora] @idFuncionario smallint, @idTransaccion smallint
AS
BEGIN

DECLARE @nombre varchar(50);
SET @nombre = (SELECT nombre FROM Funcionario WHERE idFuncionario=@idFuncionario)

INSERT INTO [Bitacora]
           ([nombre]
           ,[fecha]
           ,[idTransaccion])
     VALUES
           (@nombre
           ,GETDATE()
           ,@idTransaccion)
End
GO


