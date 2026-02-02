import db from "../config/conexion.js";

const asignacionEmpresas = {
  vincularColaborador: async (id_empresa, id_colaborador) => {
    const [rows] = await db.query('CALL sp_vincular_colaborador_empresa(?, ?)', [id_empresa, id_colaborador]);
    return rows[0];
  },
  desvincularColaborador: async (id_asignacion) => {
    const [rows] = await db.query('CALL sp_eliminar_asignacion(?)', [id_asignacion]);
    return rows[0];
  },
  actualizarColaboradorEmpresa: async (id_asginacion, id_empresa, id_colaborador) => {
    const [rows] = await db.query('CALL sp_actualizar_asignacion(?, ?, ?)', [id_asginacion, id_empresa, id_colaborador]);
    return rows[0];
  },
  mostrarTodasAsignaciones: async () => {
    const [rows] = await db.query('CALL sp_obtener_asignacion_colaboradores()');
    return rows[0];
  },
  mostrarAsignacionesPorEmpresa: async (id_empresa) => {
    const [rows] = await db.query('CALL sp_obtener_asignacion_colaboradores(?)', [id_empresa]);
    return rows[0];
  }
}

export default asignacionEmpresas;