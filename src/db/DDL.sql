CREATE DATABASE pruebatecnica;
USE pruebatecnica;

CREATE TABLE Geografia(
	id_geografia INT AUTO_INCREMENT NOT NULL,
    pais VARCHAR(255),
    departamento VARCHAR(255),
    municipio VARCHAR(255),
    PRIMARY KEY (id_geografia)
);

CREATE TABLE Empresas(
	id_empresa INT AUTO_INCREMENT NOT NULL,
    nit VARCHAR(30),
    razon_social VARCHAR(255),
    nombre_comercial VARCHAR(255),
    telefono VARCHAR(30),
    email VARCHAR(255),
    id_geografia INT,
    PRIMARY KEY (id_empresa)
);

CREATE TABLE Colaboradores(
	id_colaborador INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(250),
    apellido VARCHAR(250),
    telefono VARCHAR(30),
    email VARCHAR(250),
    contrasena VARCHAR(250),
    id_roles INT,
    PRIMARY KEY (id_colaborador),
    FOREIGN KEY (id_roles) REFERENCES Roles(id_roles)
);

CREATE TABLE Asignacion_Empresas (
    id_asignacion INT AUTO_INCREMENT NOT NULL,
    id_empresa INT,
    id_colaborador INT,
    fecha_vinculacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_asignacion),
    FOREIGN KEY (id_empresa) REFERENCES Empresas(id_empresa),
    FOREIGN KEY (id_colaborador) REFERENCES Colaboradores(id_colaborador)
);

CREATE TABLE Roles(
	id_roles INT AUTO_INCREMENT NOT NULL,
    rol VARCHAR(250),
    PRIMARY KEY (id_roles)
);