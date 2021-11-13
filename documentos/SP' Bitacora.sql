SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ingresarBitacora] @nombre varchar(50), @idTransaccion smallint
AS
BEGIN
INSERT INTO [dbo].[Bitacora]
           ([nombre]
           ,[fecha]
           ,[idTransaccion])
     VALUES
           (@nombre
           ,GETDATE()
           ,@idTransaccion)
End
GO