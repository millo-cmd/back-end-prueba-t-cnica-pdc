import colaboradores from '../models/colaboradores.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
  const { email, contrasena } = req.body;
  console.log(email, contrasena);
  try {
    const colaboradorEncontrado = await colaboradores.searchByEmail(email);
    if (!colaboradorEncontrado) {
      return res.status(404).json({ message: "Colaborador no encontrado", respuesta: false });
    }
    const contrasenaValida = await bcrypt.compare(contrasena, colaboradorEncontrado.contrasena);
    if (!contrasenaValida) {
      return res.status(401).json({ message: "Contraseña incorrecta", respuesta: false });
    }
    const payload = {
      id_colaborador: colaboradorEncontrado.id_colaborador,
      email: colaboradorEncontrado.email,
      rol: colaboradorEncontrado.id_roles
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ token, respuesta: true, message: "Colaborador logueado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al iniciar sesión", respuesta: false });
  }
}

export const register = async (req, res) => {
  const { email, contrasena } = req.body;
  try {
    const colaboradorEncontrado = await colaboradores.searchByEmail(email);
    if (colaboradorEncontrado) {
      return res.status(409).json({ message: "Colaborador ya registrado", respuesta: false });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(contrasena, salt);
    console.log(hash);
    await colaboradores.create({ email, contrasena: hash });
    res.json({ message: "Colaborador registrado exitosamente", respuesta: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al registrar el colaborador", respuesta: false });
  }
}
