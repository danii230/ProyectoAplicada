USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarBitacoraAuditoria]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarBitacoraAuditoria] @idBitacoraAuditoria smallint
AS
BEGIN
UPDATE BitacoraAuditoria
SET estado = 0
WHERE idBitacoraAuditoria=@idBitacoraAuditoria
End
GO

/****** Object:  StoredProcedure [dbo].[getBitacoraAuditoria]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Alter PROCEDURE [dbo].[getBitacoraAuditoria] 
AS
SELECT b.idBitacoraAuditoria,b.idTransaccion,  b.descripcion, b.idUsuarioAplicativo, b.fechaHora, b.idSolicitud
FROM   BitacoraAuditoria b
JOIN   Transaccion t ON b.idTransaccion= t.idTransaccion
JOIN   Funcionario f ON b.idUsuarioAplicativo= f.idFuncionario  
where  b.estado =1 
GO


exec getBitacoraAuditoria



/****** Object:  StoredProcedure [dbo].[getBitacoraAuditoriaId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getBitacoraAuditoriaId] @idBitacoraAuditoria varchar(50)
AS
BEGIN
SELECT b.idBitacoraAuditoria,b.idTransaccion,  b.descripcion, b.idUsuarioAplicativo, b.fechaHora, b.idSolicitud
FROM   BitacoraAuditoria b
where  b.idBitacoraAuditoria= @idBitacoraAuditoria
END
GO

/****** Object:  StoredProcedure [dbo].[ingresarBitacoraAuditoria]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ingresarBitacoraAuditoria] @idTransaccion smallint, @descripcion varchar(50),@idUsuarioAplicativo smallint, @fechaHora datetime,@idSolicitud smallint,@estado bit
AS
BEGIN
INSERT INTO [dbo].[BitacoraAuditoria]
           ([idTransaccion]
           ,[descripcion]
           ,[idUsuarioAplicativo]
           ,[fechaHora]
           ,[idSolicitud]
           ,[estado])
     VALUES
           (@idTransaccion
           ,@descripcion
           ,@idUsuarioAplicativo
           ,@fechaHora
           ,@idSolicitud
           ,1)
End
GO

/****** Object:  StoredProcedure [dbo].[modificarBitacoraAuditoria]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarBitacoraAuditoria] @idBitacoraAuditoria smallint, @idTransaccion smallint, @descripcion varchar(50),@idUsuarioAplicativo smallint, @fechaHora datetime,@idSolicitud smallint,@estado bit
AS
BEGIN
UPDATE BitacoraAuditoria
SET        idTransaccion = @idTransaccion
           , descripcion = @descripcion
           ,idUsuarioAplicativo = @idUsuarioAplicativo
           ,fechaHora = @fechaHora
           ,idSolicitud= @idSolicitud
WHERE idBitacoraAuditoria=@idBitacoraAuditoria
End
GO
