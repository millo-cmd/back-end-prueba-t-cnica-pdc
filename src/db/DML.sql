-- PROCEDIMIENTOS ALMACENADOS//	
-- PROCEDIMIENTO ALMACENADO CREAR GEOGRAFIA

DELIMITER //
CREATE PROCEDURE sp_crear_geografia(
	IN p_pais VARCHAR(255),
    IN p_departamento VARCHAR(255),
    IN p_municipio VARCHAR(255)
)
BEGIN
	INSERT INTO Geografia (pais, departamento, municipio) VALUES(p_pais, p_departamento, p_municipio);
END//

-- PROCEDIMIENTO ALMACENADO ELIMINAR GEOGRAFIA
DELIMITER //
CREATE PROCEDURE sp_eliminar_geografia(
	IN sp_id_geografia INT	
)
BEGIN 
	DELETE FROM Geografia WHERE id_geografia = sp_id_geografia;
END//

-- PROCEDIMIENTO ALMACENADO ACTUALIZAR GEOGRAFIA

DELIMITER //
CREATE PROCEDURE sp_actualizar_geografia(
    IN p_id INT,
    IN p_pais VARCHAR(255),
    IN p_departamento VARCHAR(255),
    IN p_municipio VARCHAR(255)
)
BEGIN
    UPDATE Geografia 
    SET pais = p_pais, 
        departamento = p_departamento, 
        municipio = p_municipio
    WHERE id_geografia = p_id;
END //
DELIMITER ;

-- PROCEDIMIENTO ALMACENADO MOSTRAR GEOGRAFIAS
DELIMITER //
CREATE PROCEDURE sp_obtener_todas_geografias()
BEGIN
    SELECT id_geografia, pais, departamento, municipio 
    FROM Geografia 
    ORDER BY id_geografia DESC;
END //
DELIMITER ;

-- PROCEDIMIENTO ALMACENADO MOSTRAR UNA GEOGRAFIA

DELIMITER //
CREATE PROCEDURE sp_obtener_geografia_por_id(
    IN p_id INT
)
BEGIN
    SELECT id_geografia, pais, departamento, municipio 
    FROM Geografia 
    WHERE id_geografia = p_id;
END //
DELIMITER ;

-- ======================== STORE PROCEDURES PARA EMPRESAS =======================
-- PROCEDIMIENTO ALMACENADO CREAR EMPRESA
DELIMITER //
CREATE PROCEDURE sp_crear_empresa(
    IN p_nit VARCHAR(30),
    IN p_razon_social VARCHAR(255),
    IN p_nombre_comercial VARCHAR(255),
    IN p_telefono VARCHAR(30),
    IN p_email VARCHAR(255),
    IN p_id_geografia INT
)
BEGIN
    INSERT INTO Empresas (nit, razon_social, nombre_comercial, telefono, email, id_geografia) 
    VALUES(p_nit, p_razon_social, p_nombre_comercial, p_telefono, p_email, p_id_geografia);
END //

-- PROCEDIMIENTO ALMACENADO ELIMINAR EMPRESA
DELIMITER //
CREATE PROCEDURE sp_eliminar_empresa(
	IN sp_id INT	
)
BEGIN 
	DELETE FROM Empresas WHERE id_empresa = sp_id;
END//


-- PROCEDIMIENTO ALMACENADO ACTUALIZAR EMPRESA
DELIMITER //
CREATE PROCEDURE sp_actualizar_empresa(
    IN p_id_empresa INT,
    IN p_nit VARCHAR(30),
    IN p_razon_social VARCHAR(255),
    IN p_nombre_comercial VARCHAR(255),
    IN p_telefono VARCHAR(30),
    IN p_email VARCHAR(255),
    IN p_id_geografia INT
)
BEGIN
    UPDATE Empresas SET 
        nit = p_nit, razon_social = p_razon_social, nombre_comercial = p_nombre_comercial, 
        telefono = p_telefono, email = p_email, id_geografia = p_id_geografia
    WHERE id_empresa = p_id_empresa;
END //

-- PROCEDIMIENTO ALMACENADO MOSTRAR EMPRESAS

DELIMITER //
CREATE PROCEDURE sp_obtener_todas_empresas()
BEGIN
    SELECT e.*, g.municipio, g.pais 
    FROM Empresas e
    LEFT JOIN Geografia g ON e.id_geografia = g.id_geografia;
END //
DELIMITER ;

-- PROCEDIMIENTO ALMACENADO MOSTRAR UNA EMPRESA
DELIMITER //
CREATE PROCEDURE sp_obtener_empresa_por_id(IN p_id INT)
BEGIN
    SELECT * FROM Empresas WHERE id_empresa = p_id;
END //

-- ======================== STORE PROCEDURES PARA COLABORADORES =======================
-- PROCEDIMIENTO ALMACENADO CREAR COLABORADORES
DELIMITER //
CREATE PROCEDURE sp_crear_colaborador(
    IN p_nombre VARCHAR(250),
    IN p_apellido VARCHAR(250),
    IN p_telefono VARCHAR(30),
    IN p_email VARCHAR(250),
    IN p_contrasena VARCHAR(250),
    IN p_id_roles INT
)
BEGIN
    INSERT INTO Colaboradores (nombre, apellido, telefono, email, contrasena, id_roles)
    VALUES (p_nombre, p_apellido, p_telefono, p_email, p_contrasena, p_id_roles);
END //

-- PROCEDIMIENTO ALMACENADO ELIMINAR COLABORADORES
DELIMITER //
CREATE PROCEDURE sp_eliminar_colaborador(
	IN sp_id INT	
)
BEGIN 
	DELETE FROM Colaboradores WHERE id_colaborador = sp_id;
END//


-- PROCEDIMIENTO ALMACENADO ACTUALIZAR COLABORADORES
DELIMITER //
CREATE PROCEDURE sp_actualizar_colaborador(
    IN p_id_colaborador INT,
    IN p_nombre VARCHAR(250),
    IN p_apellido VARCHAR(250),
    IN p_telefono VARCHAR(30),
    IN p_email VARCHAR(250),
    IN p_id_roles INT
)
BEGIN
    UPDATE Colaboradores SET 
        nombre = p_nombre, apellido = p_apellido, telefono = p_telefono, 
        email = p_email, id_roles = p_id_roles
    WHERE id_colaborador = p_id_colaborador;
END //

-- PROCEDIMIENTO ALMACENADO MOSTRAR COLABORADORES
DELIMITER //
CREATE PROCEDURE sp_obtener_todos_colaboradores()
BEGIN
    SELECT c.id_colaborador, c.nombre, c.apellido, c.email, c.telefono, r.rol
    FROM Colaboradores c
    INNER JOIN Roles r ON c.id_roles = r.id_roles;
END //

-- PROCEDIMIENTO ALMACENADO MOSTRAR UN COLABORADOR
DELIMITER //
CREATE PROCEDURE sp_obtener_colaborador_por_id(IN p_id INT)
BEGIN
    SELECT * FROM Colaboradores WHERE id_colaborador = p_id;
END //

-- ======================== STORE PROCEDURES PARA ROLES =======================
-- PROCEDIMIENTO ALMACENADO CREAR ROLES
DELIMITER //
CREATE PROCEDURE sp_crear_rol(
    IN p_rol VARCHAR(250)
)
BEGIN
    INSERT INTO Roles (rol)
    VALUES (p_rol);
END //

-- PROCEDIMIENTO ALMACENADO CREAR ROLES
DELIMITER //
CREATE PROCEDURE sp_eliminar_role(IN p_id INT)
BEGIN
    DELETE FROM Roles WHERE id_roles = p_id;
END //

-- PROCEDIMIENTO ALMACENADO ACTUALIZAR ROLES
DELIMITER //
CREATE PROCEDURE sp_actualizar_rol(
	IN p_id INT,
    IN p_rol VARCHAR(250)
)
BEGIN
    UPDATE Roles SET 
        rol = p_rol
    WHERE id_roles = p_id_rol;
END //

-- PROCEDIMIENTO ALMACENADO VER TODOS ROLES
DELIMITER //
CREATE PROCEDURE sp_obtener_todos_roles()
BEGIN
    SELECT id_roles, rol 
    FROM Roles 
    ORDER BY rol ASC; 
END //

-- PROCEDIMIENTO ALMACENADO VER UN ROL POR ID
DELIMITER //
CREATE PROCEDURE sp_obtener_rol_por_id(
    IN p_id INT
)
BEGIN
    SELECT id_roles, rol 
    FROM Roles 
    WHERE id_roles = p_id;
END //

-- ======================== STORE PROCEDURES PARA LÓGICA DE ROLES =======================
-- CREAR UNION COLABORADOR EMPRESA
DELIMITER //
CREATE PROCEDURE sp_vincular_colaborador_empresa(
    IN p_id_empresa INT,
    IN p_id_colaborador INT
)
BEGIN
    INSERT INTO Asignacion_Empresas (id_empresa, id_colaborador) 
    VALUES (p_id_empresa, p_id_colaborador);
END //

DELIMITER //

-- ELIMINAR UNION COLABORADOR EMPRESA
DELIMITER //
CREATE PROCEDURE sp_eliminar_asignacion(
	IN p_id_asignacion INT
)
BEGIN
	DELETE FROM Asignacion_Empresas WHERE p_id_asignacion = id_asignacion;
END //

-- EDITAR UNION COLABORADOR EMPRESA
DELIMITER //

CREATE PROCEDURE sp_actualizar_asignacion(
    IN p_id_asignacion INT,
    IN p_id_empresa INT,
    IN p_id_colaborador INT 
)
BEGIN 
    UPDATE Asignacion_Empresas 
    SET
        id_empresa = p_id_empresa,
        id_colaborador = p_id_colaborador
    WHERE id_asignacion = p_id_asignacion;
END //

-- VER ASIGNACION POR COLABORADOR
DELIMITER //

CREATE PROCEDURE sp_obtener_asignacion_colaboradores()
BEGIN
    SELECT 
        ae.id_asignacion,
        ae.id_colaborador,
        c.nombre AS Colaborador,
        ae.id_empresa,
        e.nombre_comercial AS Empresa,
        ae.fecha_vinculacion
    FROM Asignacion_Empresas ae
    INNER JOIN Colaboradores c ON ae.id_colaborador = c.id_colaborador
    INNER JOIN Empresas e ON ae.id_empresa = e.id_empresa
    ORDER BY ae.fecha_vinculacion DESC;
END //

DELIMITER ;

-- VER ASIGNACION POR NOMBRE COMERCIAL
DELIMITER //
CREATE PROCEDURE sp_obtener_asinacion_nombre_comercial(
	IN p_nombre_comercial VARCHAR(255)
)
BEGIN
	SELECT 
		e.nombre_comercial AS Empresa,
		CONCAT(c.nombre, ' ', c.apellido) AS Colaborador
	FROM Empresas e
	JOIN Asignacion_Empresas ae ON e.id_empresa = ae.id_empresa
	JOIN Colaboradores c ON ae.id_colaborador = c.id_colaborador
	WHERE e.nombre_comercial = p_nombre_comercial;
END //

-- VER COLABORADORES DE UNA COLABORADOR
DELIMITER //
CREATE PROCEDURE sp_obtener_empresas_por_colaborador(IN p_id_colaborador INT)
BEGIN
    SELECT e.id_empresa, e.nombre_comercial, e.nit
    FROM Empresas e
    INNER JOIN Asignacion_Empresas ae ON e.id_empresa = ae.id_empresa
    WHERE ae.id_colaborador = p_id_colaborador;
END //


