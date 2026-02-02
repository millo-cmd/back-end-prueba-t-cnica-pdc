import ColaboradorModel from "../models/colaboradores.models.js";
import bcrypt from "bcrypt";

export const obtenerColaboradores = async (req, res) => {
    try {
        const colaboradores = await ColaboradorModel.getAll();
        res.json(colaboradores);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los colaboradores", respuesta: false });
    }
}

export const eliminarColaborador = async (req, res) => {
    try {
        await ColaboradorModel.delete(req.body.id_colaborador);
        res.json({ message: "Colaborador eliminado exitosamente", respuesta: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar el colaborador", respuesta: false });
    }
}

export const obtenerUnColaborador = async (req, res) => {
    try {
        const colaborador = await ColaboradorModel.getById(req.params.id);
        res.json(colaborador);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener el colaborador", respuesta: false });
    }
}

export const crearColaborador = async (req, res) => {
    const { nombre, apellido, email, telefono, contrasena, id_rol } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(contrasena, salt);
        await ColaboradorModel.create({ nombre, apellido, telefono, email, hash, id_rol });
        res.json({ message: "Colaborador creado exitosamente", respuesta: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear el colaborador", respuesta: false });
    }
}

export const actualizarColaborador = async (req, res) => {
    const { id_colaborador, nombre, apellido, telefono, email, id_rol } = req.body;
    console.log(req.body);
    try {
        await ColaboradorModel.update({ id_colaborador, nombre, apellido, telefono, email, id_rol });
        res.json({ message: "Colaborador actualizado exitosamente", respuesta: true, data: { id_colaborador, nombre, apellido, telefono, email, id_rol } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el colaborador", respuesta: false });
    }
}

