import db from "../config/conexion.js";

const roles = {
    getAll: async () => {
        const [rows] = await db.query('CALL sp_obtener_todos_roles()');
        return rows[0];
    },
    getById: async (id) => {
        const [rows] = await db.query('CALL sp_obtener_rol_por_id(?)', [id]);
        return rows[0];
    },
    create: async (roles) => {
        const { nombre, descripcion } = roles;
        const [rows] = await db.query('CALL sp_crear_rol(?,?)', [nombre, descripcion]);
        return rows[0];
    },
    update: async (roles) => {
        const { id, nombre, descripcion } = roles;
        const [rows] = await db.query('CALL sp_actualizar_rol(?,?,?)', [id, nombre, descripcion]);
        return rows[0];
    },
    delete: async (id) => {
        const [rows] = await db.query('CALL sp_eliminar_role(?)', [id]);
        return rows[0];
    }
}

export default roles;