-- 1. Sacatepéquez - Jocotenango
CALL sp_crear_geografia('Guatemala', 'Sacatepéquez', 'Jocotenango');

-- 2. Chimaltenango - El Tejar
CALL sp_crear_geografia('Guatemala', 'Chimaltenango', 'El Tejar');

-- 3. Escuintla - Puerto San José
CALL sp_crear_geografia('Guatemala', 'Escuintla', 'Puerto San José');

-- 4. Alta Verapaz - Cobán
CALL sp_crear_geografia('Guatemala', 'Alta Verapaz', 'Cobán');

-- 5. Izabal - Puerto Barrios
CALL sp_crear_geografia('Guarela', 'Izabal', 'Puerto Barrios');

-- 6. Jutiapa - El Progreso
CALL sp_crear_geografia('Guatemala', 'Jutiapa', 'El Progreso');

-- 7. Quiché - Santa Cruz del Quiché
CALL sp_crear_geografia('Guatemala', 'Quiché', 'Santa Cruz del Quiché');

-- 8. Huehuetenango - Chiantla
CALL sp_crear_geografia('Guatemala', 'Huehuetenango', 'Chiantla');

-- 9. Sololá - Panajachel
CALL sp_crear_geografia('Guatemala', 'Sololá', 'Panajachel');

-- 10. Zacapa - Estanzuela
CALL sp_crear_geografia('Guatemala', 'Zacapa', 'Estanzuela');

CALL sp_actualizar_geografia(12, 'Guatemala', 'Villa Nueva', 'Villa Nueva');

select * from Geografia;

-- ========================= ejemplos roles
-- 10. Zacapa - Estanzuela
CALL sp_crear_rol('Colaborador');
CALL sp_crear_rol('Administrador');

CALL sp_eliminar_role(4);

select * from Roles;

CALL sp_eliminar_colaborador(6);

-- ========================= ejemplos roles
CALL sp_crear_colaborador('correodeEjemplo', 'colaborador', '21212121', 'colaborador2121@gmail.com', 'colaborador', 2);
CALL sp_actualizar_colaborador('1', 'Mini colaborador', 'apellido', '66666666', 'colaborador12@gmail.com', 1);
select * from Colaboradores;

CALL sp_crear_empresa('123123456', 'coca-cola', 'coca-cola company', '33333333', 'cocacola@gmail.com', 1);
CALL sp_obtener_todas_empresas();
CALL sp_actualizar_empresa(1,'324213453', 'pepsi-cola', 'pepsi-cola company', '44444444', 'pepsicola@gmail.com', 2);

CALL sp_obtener_todos_colaboradores();
UPDATE Colaboradores 
SET contrasena = '$2b$10$G3Ggh/9SuGcyYa/MBlOocejkeIPenHbRFbeU3Gn3v0D9y7RgwVkJ.' 
WHERE id_colaborador = 2;

CALL sp_obtener_todas_geografias();
CALL sp_obtener_empresas_por_colaborador(1);
CALL sp_vincular_colaborador_empesa();

CALL sp_vincular_colaborador_empresa(2,2);

CALL sp_obtener_colaboradores_por_empresa(1);

SELECT 
    c.nombre AS Colaborador, 
    e.nombre_comercial AS Empresa
FROM Colaboradores c
JOIN Asignacion_Empresas ae ON c.id_colaborador = ae.id_colaborador
JOIN Empresas e ON ae.id_empresa = e.id_empresa;

SELECT 
    e.nombre_comercial AS Empresa,
    CONCAT(c.nombre, ' ', c.apellido) AS Colaborador
FROM Empresas e
JOIN Asignacion_Empresas ae ON e.id_empresa = ae.id_empresa
JOIN Colaboradores c ON ae.id_colaborador = c.id_colaborador
WHERE e.nombre_comercial = 'coca-cola company';

CALL sp_obtener_asinacion_nombre_comercial('pepsi-cola company');
CALL sp_obtener_asignacion_colaboradores(1);

CALL sp_eliminar_asignacion(3);

SELECT * FROM Asignacion_Empresas;
SELECT * FROM Empresas;

CALL sp_obtener_asignacion_colaboradores();
