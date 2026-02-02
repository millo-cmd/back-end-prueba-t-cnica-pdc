import db from "../config/conexion.js";

const empresa = {
  getAll: async () => {
    const [rows] = await db.query('CALL sp_obtener_todas_empresas()');
    return rows[0];
  },
  getById: async (id) => {
    const [rows] = await db.query('CALL sp_obtener_empresa_por_id(?)', [id]);
    return rows[0];
  },
  create: async (empresa) => {
    const { nit, razon_social, nombre_comercial, telefono, email, id_geografia } = empresa;
    const [rows] = await db.query('CALL sp_crear_empresa(?,?,?,?,?,?)', [nit, razon_social, nombre_comercial, telefono, email, id_geografia]);
    return rows[0];
  },
  update: async (empresa) => {
    const { id_empresa, nit, razon_social, nombre_comercial, telefono, email, id_geografia } = empresa;
    const [rows] = await db.query('CALL sp_actualizar_empresa(?,?,?,?,?,?,?)', [id_empresa, nit, razon_social, nombre_comercial, telefono, email, id_geografia]);
    return rows[0];
  },
  delete: async (id) => {
    const [rows] = await db.query('CALL sp_eliminar_empresa(?)', [id]);
    return rows[0];
  }
}

export default empresa;
