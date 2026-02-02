import db from "../config/conexion.js";

const geografia = {
    getAll: async () => {
        const [rows] = await db.query('CALL sp_obtener_todas_geografias()');
        return rows[0];
    },
    getById: async (id) => {
        const [rows] = await db.query('CALL sp_obtener_geografia_por_id(?)', [id]);
        return rows[0];
    },
    create: async (geografia) => {
        const { pais, departamento, municipio } = geografia;
        const [rows] = await db.query('CALL sp_crear_geografia(?,?,?)', [pais, departamento, municipio]);
        return rows[0];
    },
    update: async (geografia) => {
        const { id_geografia, pais, departamento, municipio } = geografia;
        const [rows] = await db.query('CALL sp_actualizar_geografia(?,?,?,?)', [id_geografia, pais, departamento, municipio]);
        return rows[0];
    },
    delete: async (id) => {
        const [rows] = await db.query('CALL sp_eliminar_geografia(?)', [id]);
        return rows[0];
    }
}

export default geografia;