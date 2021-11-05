USE [IF6201_B53953_B63817_]
GO
/****** Object:  User [userApi]    Script Date: 4/11/2021 23:31:37 ******/
CREATE USER [userApi] FOR LOGIN [userApi] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [userApi]
GO
/****** Object:  Table [dbo].[Avance]    Script Date: 4/11/2021 23:31:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Avance](
	[idAvance] [smallint] IDENTITY(1,1) NOT NULL,
	[idTrimestre] [tinyint] NULL,
	[documento] [varbinary](max) NULL,
	[fechaHora] [datetime] NULL,
	[idUsuarioAplicativo] [smallint] NULL,
	[idSolicitud] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[idAvance] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BitacoraAuditoria]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BitacoraAuditoria](
	[idBitacoraAuditoria] [smallint] IDENTITY(1,1) NOT NULL,
	[idTransaccion] [smallint] NULL,
	[descripcion] [varchar](50) NULL,
	[idUsuarioAplicativo] [smallint] NULL,
	[fechaHora] [datetime] NULL,
	[idSolicitud] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[idBitacoraAuditoria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Departamento]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departamento](
	[idDepartamento] [tinyint] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idDepartamento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Foto]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Foto](
	[idFoto] [smallint] IDENTITY(1,1) NOT NULL,
	[foto] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[idFoto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Funcionario]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Funcionario](
	[idFuncionario] [smallint] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](20) NULL,
	[apellidos] [varchar](20) NULL,
	[fechaNacimiento] [datetime] NULL,
	[idSexo] [tinyint] NULL,
	[loginName] [varchar](20) NULL,
	[password] [varchar](25) NULL,
	[idFoto] [smallint] NULL,
	[idDepartamento] [tinyint] NULL,
PRIMARY KEY CLUSTERED 
(
	[idFuncionario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sexo]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sexo](
	[idSexo] [tinyint] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idSexo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Solicitud]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Solicitud](
	[idSolicitud] [smallint] IDENTITY(1,1) NOT NULL,
	[fechaHora] [datetime] NULL,
	[idUsuarioAplicativo] [smallint] NULL,
	[idResponsableTI] [smallint] NULL,
	[fechaInicio] [datetime] NULL,
	[fechaFin] [datetime] NULL,
	[idResponsableUsuarioFinal] [smallint] NULL,
	[documentoActaConstitutiva] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[idSolicitud] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transaccion]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transaccion](
	[idTransaccion] [smallint] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idTransaccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Trimestre]    Script Date: 4/11/2021 23:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trimestre](
	[idTrimestre] [tinyint] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idTrimestre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Departamento] ON 
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (1, N'Gerencia')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (2, N'Transporte')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (3, N'RH')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (4, N'Contabilidad')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (5, N'TI')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (6, N'Proveeduría')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (7, N'Finanzas')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (8, N'Tesorería')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (9, N'Legal')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (10, N'Mantenimiento')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (11, N'Recepción')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (12, N'Doctor empresa')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (13, N'Servicio al cliente')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (14, N'Auditoría')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (15, N'Seguridad')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (16, N'Subgerencia')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (17, N'Contraloría')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (18, N'Mensajería')
GO
INSERT [dbo].[Departamento] ([idDepartamento], [descripcion]) VALUES (19, N'Archivo')
GO
SET IDENTITY_INSERT [dbo].[Departamento] OFF
GO
SET IDENTITY_INSERT [dbo].[Funcionario] ON 
GO
INSERT [dbo].[Funcionario] ([idFuncionario], [nombre], [apellidos], [fechaNacimiento], [idSexo], [loginName], [password], [idFoto], [idDepartamento]) VALUES (1, N'Valeria', N'Leiva Quirós', CAST(N'2001-01-01T00:00:00.000' AS DateTime), 1, N'nada@nada.nada', N'123', NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[Funcionario] OFF
GO
SET IDENTITY_INSERT [dbo].[Sexo] ON 
GO
INSERT [dbo].[Sexo] ([idSexo], [descripcion]) VALUES (1, N'Hombre')
GO
INSERT [dbo].[Sexo] ([idSexo], [descripcion]) VALUES (2, N'Mujer')
GO
INSERT [dbo].[Sexo] ([idSexo], [descripcion]) VALUES (3, N'Otro')
GO
SET IDENTITY_INSERT [dbo].[Sexo] OFF
GO
SET IDENTITY_INSERT [dbo].[Transaccion] ON 
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (1, N'InsertSolicitud')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (2, N'DeleteSolicitud')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (3, N'SelectSolicitud')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (4, N'UpdateSolicitud')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (5, N'InsertAvance')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (6, N'DeleteAvance')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (7, N'SelectAvance')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (8, N'UpdateAvance')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (9, N'InsertFuncionario')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (10, N'DeleteFuncionario')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (11, N'SelectFuncionario')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (12, N'UpdateFuncionario')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (13, N'InsertSexo')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (14, N'DeleteSexo')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (15, N'SelectSexo')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (16, N'UpdateSexo')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (17, N'InsertTrimestre')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (18, N'DeleteTrimestre')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (19, N'SelectTrimestre')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (20, N'UpdateTrimestre')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (21, N'InsertDepartamento')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (22, N'DeleteDepartamento')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (23, N'SelectDepartamento')
GO
INSERT [dbo].[Transaccion] ([idTransaccion], [descripcion]) VALUES (24, N'UpdateDepartamento')
GO
SET IDENTITY_INSERT [dbo].[Transaccion] OFF
GO
SET IDENTITY_INSERT [dbo].[Trimestre] ON 
GO
INSERT [dbo].[Trimestre] ([idTrimestre], [descripcion]) VALUES (25, N'Enero - Marzo')
GO
INSERT [dbo].[Trimestre] ([idTrimestre], [descripcion]) VALUES (26, N'Abril - Junio')
GO
INSERT [dbo].[Trimestre] ([idTrimestre], [descripcion]) VALUES (27, N'Julio - Setiembre')
GO
INSERT [dbo].[Trimestre] ([idTrimestre], [descripcion]) VALUES (28, N'Octubre - Diciembre')
GO
SET IDENTITY_INSERT [dbo].[Trimestre] OFF
GO
ALTER TABLE [dbo].[Avance]  WITH CHECK ADD  CONSTRAINT [fk_Solicitud_Avance] FOREIGN KEY([idSolicitud])
REFERENCES [dbo].[Solicitud] ([idSolicitud])
GO
ALTER TABLE [dbo].[Avance] CHECK CONSTRAINT [fk_Solicitud_Avance]
GO
ALTER TABLE [dbo].[Avance]  WITH CHECK ADD  CONSTRAINT [fk_Trimestre_Avance] FOREIGN KEY([idTrimestre])
REFERENCES [dbo].[Trimestre] ([idTrimestre])
GO
ALTER TABLE [dbo].[Avance] CHECK CONSTRAINT [fk_Trimestre_Avance]
GO
ALTER TABLE [dbo].[Avance]  WITH CHECK ADD  CONSTRAINT [fk_UsuarioAplicativo_Avance] FOREIGN KEY([idUsuarioAplicativo])
REFERENCES [dbo].[Funcionario] ([idFuncionario])
GO
ALTER TABLE [dbo].[Avance] CHECK CONSTRAINT [fk_UsuarioAplicativo_Avance]
GO
ALTER TABLE [dbo].[BitacoraAuditoria]  WITH CHECK ADD  CONSTRAINT [fk_Solicitud_BitacoraAutitoria] FOREIGN KEY([idSolicitud])
REFERENCES [dbo].[Solicitud] ([idSolicitud])
GO
ALTER TABLE [dbo].[BitacoraAuditoria] CHECK CONSTRAINT [fk_Solicitud_BitacoraAutitoria]
GO
ALTER TABLE [dbo].[BitacoraAuditoria]  WITH CHECK ADD  CONSTRAINT [fk_Transaccion_BitacoraAutitoria] FOREIGN KEY([idTransaccion])
REFERENCES [dbo].[Transaccion] ([idTransaccion])
GO
ALTER TABLE [dbo].[BitacoraAuditoria] CHECK CONSTRAINT [fk_Transaccion_BitacoraAutitoria]
GO
ALTER TABLE [dbo].[BitacoraAuditoria]  WITH CHECK ADD  CONSTRAINT [fk_UsuarioAplicativo_BitacoraAutitoria] FOREIGN KEY([idUsuarioAplicativo])
REFERENCES [dbo].[Funcionario] ([idFuncionario])
GO
ALTER TABLE [dbo].[BitacoraAuditoria] CHECK CONSTRAINT [fk_UsuarioAplicativo_BitacoraAutitoria]
GO
ALTER TABLE [dbo].[Funcionario]  WITH CHECK ADD  CONSTRAINT [fk_Departamento_Funcionario] FOREIGN KEY([idDepartamento])
REFERENCES [dbo].[Departamento] ([idDepartamento])
GO
ALTER TABLE [dbo].[Funcionario] CHECK CONSTRAINT [fk_Departamento_Funcionario]
GO
ALTER TABLE [dbo].[Funcionario]  WITH CHECK ADD  CONSTRAINT [fk_Foto_Funcionario] FOREIGN KEY([idFoto])
REFERENCES [dbo].[Foto] ([idFoto])
GO
ALTER TABLE [dbo].[Funcionario] CHECK CONSTRAINT [fk_Foto_Funcionario]
GO
ALTER TABLE [dbo].[Funcionario]  WITH CHECK ADD  CONSTRAINT [fk_Sexo_Funcionario] FOREIGN KEY([idSexo])
REFERENCES [dbo].[Sexo] ([idSexo])
GO
ALTER TABLE [dbo].[Funcionario] CHECK CONSTRAINT [fk_Sexo_Funcionario]
GO
ALTER TABLE [dbo].[Solicitud]  WITH CHECK ADD  CONSTRAINT [fk_ResponsableTI_Solicitud] FOREIGN KEY([idResponsableTI])
REFERENCES [dbo].[Funcionario] ([idFuncionario])
GO
ALTER TABLE [dbo].[Solicitud] CHECK CONSTRAINT [fk_ResponsableTI_Solicitud]
GO
ALTER TABLE [dbo].[Solicitud]  WITH CHECK ADD  CONSTRAINT [fk_UsuarioAplicativo_Solicitud] FOREIGN KEY([idUsuarioAplicativo])
REFERENCES [dbo].[Funcionario] ([idFuncionario])
GO
ALTER TABLE [dbo].[Solicitud] CHECK CONSTRAINT [fk_UsuarioAplicativo_Solicitud]
GO
ALTER TABLE [dbo].[Solicitud]  WITH CHECK ADD  CONSTRAINT [fk_UsuarioFinal_Solicitud] FOREIGN KEY([idResponsableUsuarioFinal])
REFERENCES [dbo].[Funcionario] ([idFuncionario])
GO
ALTER TABLE [dbo].[Solicitud] CHECK CONSTRAINT [fk_UsuarioFinal_Solicitud]
GO
/****** Object:  StoredProcedure [dbo].[existeUsuario]    Script Date: 4/11/2021 23:31:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[existeUsuario]
	-- Add the parameters for the stored procedure here
	@loginName nvarchar(40) = 'nada@nada.nada',
	@password nvarchar(40) = '123'
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;


    -- Insert statements for procedure here
	SELECT        nombre,apellidos
	FROM          Funcionario
	WHERE loginName = @loginName and password = @password

	

END
GO
