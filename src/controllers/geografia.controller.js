import geografiaModel from "../models/geografia.models.js";

export const obtenerGeografia = async (req, res) => {
    try {
        const geografias = await geografiaModel.getAll();
        res.json(geografias);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las geografias" });
    }
}

export const obtenerUnaGeografia = async (req, res) => {
    try {
        const geografia = await geografiaModel.getById(req.params.id);
        res.json(geografia);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener la geografia" });
    }
}

export const crearGeografia = async (req, res) => {
    const { pais, departamento, municipio } = req.body;

    try {
        await geografiaModel.create({ pais, departamento, municipio });
        res.json({ message: "Geografia creada exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear la geografia" });
    }
}

export const actualizarGeografia = async (req, res) => {
    const { id_geografia, pais, departamento, municipio } = req.body;

    try {
        await geografiaModel.update({ id_geografia, pais, departamento, municipio });
        res.json({ message: "Geografia actualizada exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar la geografia" });
    }
}

export const eliminarGeografia = async (req, res) => {
    try {
        await geografiaModel.delete(req.body.id_geografia);
        res.json({ message: "Geografia eliminada exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar la geografia" });
    }
}