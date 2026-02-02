import asignacionEmpresasModel from "../models/asignacionEmpresas.models.js";

export const vincularColaborador = async (req, res) => {
    const { id_empresa, id_colaborador } = req.body;
    try {
        await asignacionEmpresasModel.vincularColaborador(id_empresa, id_colaborador);
        res.json({ message: "Colaborador vinculado exitosamente", respuesta: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al vincular el colaborador", respuesta: false });
    }
}

export const eliminarAsignacion = async (req, res) => {
    console.log(req.body, "RECIBE")
    try {
        await asignacionEmpresasModel.desvincularColaborador(req.body.id_asignacion);
        res.json({ message: "Asignacion eliminada exitosamente", respuesta: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar la asignacion", respuesta: false });
    }
}

export const actualizarAsignacion = async (req, res) => {
    const { id_asignacion, id_empresa, id_colaborador } = req.body;
    try {
        await asignacionEmpresasModel.actualizarColaboradorEmpresa(id_asignacion, id_empresa, id_colaborador);
        res.json({ message: "Asignacion actualizada exitosamente", respuesta: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar la asignacion", respuesta: false });
    }
}

export const mostrarTodasAsignaciones = async (req, res) => {
    try {
        const asignaciones = await asignacionEmpresasModel.mostrarTodasAsignaciones();
        res.json(asignaciones);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las asignaciones", respuesta: false });
    }
}

export const obtenerAsignacionesPorEmpresa = async (req, res) => {
    const { id_empresa } = req.body;
    try {
        const asignaciones = await asignacionEmpresasModel.mostrarAsignacionesPorEmpresa(id_empresa);
        res.json(asignaciones);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las asignaciones", respuesta: false });
    }
}

