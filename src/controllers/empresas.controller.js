import empresasModel from "../models/empresas.js";

export const obtenerEmpresas = async (req, res) => {
    try {
        const empresas = await empresasModel.getAll();
        res.json(empresas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las empresas" });
    }
}

export const obtenerUnaEmpresa = async (req, res) => {
    try {
        const empresa = await empresasModel.getById(req.params.id);
        res.json(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener la empresa" });
    }
}

export const crearEmpresa = async (req, res) => {
    const { nit, razon_social, nombre_comercial, telefono, email, id_geografia } = req.body;

    try {
        await empresasModel.create({ nit, razon_social, nombre_comercial, telefono, email, id_geografia });
        res.json({ message: "Empresa creada exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear la empresa" });
    }
}

export const actualizarEmpresa = async (req, res) => {
    const { id_empresa, nit, razon_social, nombre_comercial, telefono, email, id_geografia } = req.body;

    try {
        await empresasModel.update({ id_empresa, nit, razon_social, nombre_comercial, telefono, email, id_geografia });
        res.json({ message: "Empresa actualizada exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar la empresa" });
    }
}

export const eliminarEmpresa = async (req, res) => {
    try {
        await empresasModel.delete(req.body.id_empresa);
        res.json({ message: "Empresa eliminada exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar la empresa" });
    }
}