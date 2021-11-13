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
Alter PROCEDURE [dbo].[ingresarAvance] @fechaHora datetime, @idUsuarioAplicativo smallint, @idResponsableTI smallint, @fechaInicio datetime, @fechaFin datetime, @idResponsableUsuarioFinal smallint, @documentoActaConstitutiva varbinary(max)
AS
BEGIN
INSERT INTO [dbo].[Avance]
           ([fechaHora]
           ,[idUsuarioAplicativo]
           ,[idResponsableTI]
           ,[fechaInicio]
           ,[fechaFin]
           ,[idResponsableUsuarioFinal]
           ,[documentoActaConstitutiva]
           ,[estado])
     VALUES
           (GETDATE()
            ,@idUsuarioAplicativo
			,@idResponsableTI
			,@fechaInicio
			,@fechaFin
			,@idResponsableUsuarioFinal
			,@documentoActaConstitutiva
			,1)
End
GO

/****** Object:  StoredProcedure [dbo].[modificarAvance]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarAvance] @idAvance tinyint, @fechaHora datetime, @idUsuarioAplicativo smallint, @idResponsableTI smallint, @fechaInicio datetime, @fechaFin datetime, @idResponsableUsuarioFinal smallint, @documentoActaConstitutiva varbinary(max)
AS
BEGIN
UPDATE Avance
SET         idResponsableTI=@idResponsableTI
			,fechaInicio=@fechaInicio
			,fechaFin=@fechaFin
			,idResponsableUsuarioFinal=@idResponsableUsuarioFinal
			,documentoActaConstitutiva= @documentoActaConstitutiva
WHERE idAvance=@idAvance
End
GO
