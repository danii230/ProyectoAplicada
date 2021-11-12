USE [IF6201_B53953_B63817_]
GO
/****** Object:  StoredProcedure [dbo].[eliminarDepartamento]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[eliminarDepartamento] @idDepartamento tinyint
AS
BEGIN
UPDATE Departamento
SET estado = 0
WHERE idDepartamento=@idDepartamento
End
GO
/****** Object:  StoredProcedure [dbo].[getDepartamento]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getDepartamento] 
AS
Select t.idDepartamento,t.descripcion
From Departamento as t
where t.estado= 1
GO
/****** Object:  StoredProcedure [dbo].[getDepartamentoId]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getDepartamentoId] @idDepartamento varchar(50)
AS
BEGIN
Select t.idDepartamento,t.descripcion
From Departamento as t
WHERE t.idDepartamento= @idDepartamento
end
GO
/****** Object:  StoredProcedure [dbo].[ingresarDepartamento]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ingresarDepartamento] @description varchar(50)
AS
BEGIN
DECLARE @contador NVARCHAR(50)
SET @contador = (SELECT COUNT(idDepartamento)FROM Departamento)+1;
INSERT INTO Departamento
           (idDepartamento
           ,descripcion,estado)
     VALUES
           (@contador,@description,1)
End
GO
/****** Object:  StoredProcedure [dbo].[modificarDepartamento]    Script Date: 11/11/2021 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarDepartamento] @idDepartamento tinyint, @descripcion varchar(50)
AS
BEGIN
UPDATE Departamento
SET descripcion = @descripcion
WHERE idDepartamento=@idDepartamento
End
GO
