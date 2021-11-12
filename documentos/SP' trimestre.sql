USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarTrimestre]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarFuncionario] @idTrimestre tinyint
AS
BEGIN
UPDATE Trimestre
SET estado = 0
WHERE idTrimestre=@idTrimestre
End
GO
/****** Object:  StoredProcedure [dbo].[getTrimestre]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getTrimestre] 
AS
Select t.idTrimestre,t.descripcion
From Trimestre as t
where t.estado= 1
GO
/****** Object:  StoredProcedure [dbo].[getTrimestreId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getTrimesteId] @idTrimestre varchar(50)
AS
BEGIN
Select t.idTrimestre,t.descripcion
From Trimestre as t
WHERE t.idTrimestre= @idTrimestre
end
GO
/****** Object:  StoredProcedure [dbo].[ingresarTrimestre]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ingresarTrimestre] @description varchar(50)
AS
BEGIN
DECLARE @contador NVARCHAR(50)
SET @contador = (SELECT COUNT(idTrimestre)FROM Trimestre)+1;
INSERT INTO Trimestre
           (idTrimestre
           ,descripcion,estado)
     VALUES
           (@contador,@description,1)
End
GO
/****** Object:  StoredProcedure [dbo].[modificarTrimestre]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarTrimestre] @idTrimestre tinyint, @descripcion varchar(50)
AS
BEGIN
UPDATE Trimestre
SET descripcion = @descripcion
WHERE idTrimestre=@idTrimestre
End
GO
