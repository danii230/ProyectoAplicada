USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarSolicitud]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarSolicitud] @idSolicitud tinyint
AS
BEGIN
UPDATE Solicitud
SET estado = 0
WHERE idSolicitud=@idSolicitud
End
GO




/****** Object:  StoredProcedure [dbo].[getSolicitud]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Alter PROCEDURE [dbo].[getSolicitud] 
AS
SELECT  s.idSolicitud, s.fechaHora, s.idUsuarioAplicativo, s.idResponsableTI, s.fechaInicio, s.fechaFin, s.idResponsableUsuarioFinal, nombreUA=fUA.nombre, apellidosUA= fUA.apellidos,nombreTI= fTI.nombre,apellidoTI= fTI.apellidos, nombreRU=fRU.nombre, apellidosRU=fRU.apellidos 
FROM  Solicitud s
JOIN Funcionario fUA ON s.idUsuarioAplicativo= fUA.idFuncionario
JOIN Funcionario fTI ON s.idResponsableTI= fTI.idFuncionario
JOIN Funcionario fRU ON s.idResponsableUsuarioFinal= fRU.idFuncionario
where s.estado= 1 
GO


exec getSolicitud



/****** Object:  StoredProcedure [dbo].[getSolicitudId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getSolicitudId] @idSolicitud varchar(50)
AS
BEGIN
SELECT  s.idSolicitud, s.fechaHora, s.idUsuarioAplicativo, s.idResponsableTI, s.fechaInicio, s.fechaFin, s.idResponsableUsuarioFinal
FROM  Solicitud s
end
GO
/****** Object:  StoredProcedure [dbo].[ingresarSolicitud]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Alter PROCEDURE [dbo].[ingresarSolicitud] @fechaHora datetime, @idUsuarioAplicativo smallint, @idResponsableTI smallint, @fechaInicio datetime, @fechaFin datetime, @idResponsableUsuarioFinal smallint, @documentoActaConstitutiva varbinary(max)
AS
BEGIN
INSERT INTO [dbo].[Solicitud]
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

/****** Object:  StoredProcedure [dbo].[modificarSolicitud]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarSolicitud] @idSolicitud tinyint, @fechaHora datetime, @idUsuarioAplicativo smallint, @idResponsableTI smallint, @fechaInicio datetime, @fechaFin datetime, @idResponsableUsuarioFinal smallint, @documentoActaConstitutiva varbinary(max)
AS
BEGIN
UPDATE Solicitud
SET         idResponsableTI=@idResponsableTI
			,fechaInicio=@fechaInicio
			,fechaFin=@fechaFin
			,idResponsableUsuarioFinal=@idResponsableUsuarioFinal
			,documentoActaConstitutiva= @documentoActaConstitutiva
WHERE idSolicitud=@idSolicitud
End
GO
