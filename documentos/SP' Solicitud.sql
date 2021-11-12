USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarTransaccion]    Script Date: 11/11/2021 18:37:47 ******/
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
/****** Object:  StoredProcedure [dbo].[getTransaccion]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getSolicitud] 
AS
SELECT  s.idSolicitud, s.fechaHora, s.idUsuarioAplicativo, s.idResponsableTI, s.fechaInicio, s.fechaFin, s.idResponsableUsuarioFinal
FROM  Solicitud s, Funcionario usuarioAplicativo,Funcionario responsableTI,Funcionario responsableUsuarioFinal
where s.estado= 1 and s.idUsuarioAplicativo=usuarioAplicativo.idFuncionario and s.idUsuarioAplicativo=usuarioAplicativo.idFuncionario
GO
/****** Object:  StoredProcedure [dbo].[getTransaccionId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getTransaccionId] @idTransaccion varchar(50)
AS
BEGIN
Select t.idTransaccion,t.descripcion
From Transaccion as t
WHERE t.idTransaccion= @idTransaccion
end
GO
/****** Object:  StoredProcedure [dbo].[ingresarTransaccion]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ingresarTransaccion] @description varchar(50)
AS
BEGIN
DECLARE @contador NVARCHAR(50)
SET @contador = (SELECT COUNT(idTransaccion)FROM Transaccion)+1;
INSERT INTO Transaccion
           (idTransaccion
           ,descripcion,estado)
     VALUES
           (@contador,@description,1)
End
GO
/****** Object:  StoredProcedure [dbo].[modificarTransaccion]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarTransaccion] @idTransaccion tinyint, @descripcion varchar(50)
AS
BEGIN
UPDATE Transaccion
SET descripcion = @descripcion
WHERE idTransaccion=@idTransaccion
End
GO