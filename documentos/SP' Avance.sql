USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarAvance]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarAvance] @idAvance tinyint
AS
BEGIN
UPDATE Avance
SET estado = 0
WHERE idAvance=@idAvance
End
GO

/****** Object:  StoredProcedure [dbo].[getAvance]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[getAvance] 
AS
SELECT        a.idAvance, a.idTrimestre, a.fechaHora, a.idUsuarioAplicativo, a.idSolicitud, nombreTrimestre= t.descripcion, nombreUA=fUA.nombre, apellidosUA= fUA.apellidos
FROM          Avance a
JOIN Funcionario fUA ON a.idUsuarioAplicativo= fUA.idFuncionario
JOIN Trimestre t ON a.idTrimestre= t.idTrimestre

where a.estado= 1 
GO


exec getAvance



/****** Object:  StoredProcedure [dbo].[getAvanceId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getAvanceId] @idAvance varchar(50)
AS
BEGIN
SELECT    a.idAvance, a.idTrimestre, a.documento, a.fechaHora, a.idUsuarioAplicativo, a.idSolicitud
FROM      Avance a
where a.idAvance= @idAvance
END
GO
/****** Object:  StoredProcedure [dbo].[ingresarAvance]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ingresarAvance] @idTrimestre tinyint, @documento varbinary, @fechaHora datetime, @idUsuarioAplicativo smallint, @idSolicitud smallint
AS
BEGIN
INSERT INTO [dbo].[Avance]
           ([idTrimestre]
           ,[documento]
           ,[fechaHora]
           ,[idUsuarioAplicativo]
           ,[idSolicitud]
           ,[estado])
     VALUES
           (@idTrimestre
           ,@documento
           ,@fechaHora
           ,@idUsuarioAplicativo
           ,@idSolicitud
           ,1)
End
GO

/****** Object:  StoredProcedure [dbo].[modificarAvance]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarAvance] @idAvance tinyint, @idTrimestre tinyint, @documento varbinary, @fechaHora datetime, @idUsuarioAplicativo smallint, @idSolicitud smallint
AS
BEGIN
UPDATE Avance
SET         idTrimestre=@idTrimestre
           ,documento= @documento
           ,fechaHora= @fechaHora
           ,idUsuarioAplicativo= @idUsuarioAplicativo
           ,idSolicitud= @idSolicitud
WHERE idAvance=@idAvance
End
GO
