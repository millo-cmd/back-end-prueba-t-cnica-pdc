import roles from "../models/roles.models.js";

export const obtenerRoles = async (req, res) => {
    try {
        const roles = await roles.getAll();
        res.json(roles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los roles" });
    }
}

export const obtenerUnRole = async (req, res) => {
    try {
        const role = await roles.getById(req.params.id);
        res.json(role);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener el role" });
    }
}

export const crearRole = async (req, res) => {
    const { nombre, descripcion } = req.body;

    try {
        await roles.create({ nombre, descripcion });
        res.json({ message: "Role creado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear el role" });
    }
}

export const actualizarRole = async (req, res) => {
    const { id, nombre, descripcion } = req.body;

    try {
        await roles.update({ id, nombre, descripcion });
        res.json({ message: "Role actualizado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el role" });
    }
}

export const eliminarRole = async (req, res) => {
    try {
        await roles.delete(req.params.id);
        res.json({ message: "Role eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar el role" });
    }
}
