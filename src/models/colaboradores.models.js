import db from "../config/conexion.js";

const colaboradores = {
    getAll: async () => {
        const [rows] = await db.query('CALL sp_obtener_todos_colaboradores()');
        return rows[0];
    },
    getById: async (id) => {
        const [rows] = await db.query('CALL sp_obtener_colaborador_por_id(?)', [id]);
        return rows[0];
    },
    create: async (colaboradores) => {
        const { nombre, apellido, telefono, email, hash, id_rol } = colaboradores;
        const [rows] = await db.query('CALL sp_crear_colaborador(?,?,?,?,?,?)', [nombre, apellido, telefono, email, hash, id_rol]);
        return rows[0];
    },
    update: async (colaboradores) => {
        const { id_colaborador, nombre, apellido, telefono, email, id_rol } = colaboradores;
        const [rows] = await db.query('CALL sp_actualizar_colaborador(?,?,?,?,?,?)', [id_colaborador, nombre, apellido, telefono, email, id_rol]);
        return rows[0];
    },
    delete: async (id_colaborador) => {
        const [rows] = await db.query('CALL sp_eliminar_colaborador(?)', [id_colaborador]);
        return rows[0];
    },
    searchByEmail: async (email) => {
        const [rows] = await db.query('SELECT * FROM colaboradores WHERE email = ?', [email]);
        return rows[0];
    }
}

export default colaboradores;