import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { obtenerGeografia, crearGeografia, obtenerUnaGeografia, actualizarGeografia, eliminarGeografia } from "../controllers/geografia.controller.js";
import { obtenerColaboradores, obtenerUnColaborador, crearColaborador, actualizarColaborador, eliminarColaborador } from "../controllers/colaboradores.controller.js";
import { obtenerEmpresas, obtenerUnaEmpresa, crearEmpresa, actualizarEmpresa, eliminarEmpresa } from "../controllers/empresas.controller.js";
import { verificarToken } from "../middlewares/authMiddleware.js";
import { vincularColaborador, eliminarAsignacion, actualizarAsignacion, mostrarTodasAsignaciones, obtenerAsignacionesPorEmpresa } from "../controllers/asignacion.controller.js";

const router = Router();

// Auth
router.post("/login", login);
router.post("/register", register);

// Geografia
router.get("/geografias", verificarToken, obtenerGeografia);
router.get("/geografia/:id", verificarToken, obtenerUnaGeografia);
router.post("/crearGeografia", verificarToken, crearGeografia);
router.put("/actualizarGeografia", verificarToken, actualizarGeografia);
router.delete("/eliminarGeografia", verificarToken, eliminarGeografia);

// Colaboradores
router.get("/colaboradores", verificarToken, obtenerColaboradores);
router.get("/colaboradores/:id", verificarToken, obtenerUnColaborador);
router.post("/crearColaborador", verificarToken, crearColaborador);
router.put("/actualizarColaborador", verificarToken, actualizarColaborador);
router.delete("/eliminarColaborador", verificarToken, eliminarColaborador);

//Empresasa
router.get("/empresas", verificarToken, obtenerEmpresas);
router.get("/empresas/:id", verificarToken, obtenerUnaEmpresa);
router.post("/crearEmpresa", verificarToken, crearEmpresa);
router.put("/actualizarEmpresa", verificarToken, actualizarEmpresa);
router.delete("/eliminarEmpresa", verificarToken, eliminarEmpresa);

//Asignaciones
router.post("/vincularColaborador", verificarToken, vincularColaborador);
router.delete("/desvincularColaborador", verificarToken, eliminarAsignacion);
router.put("/actualizarColaboradorEmpresa", verificarToken, actualizarAsignacion);
router.get("/obtenerAsignaciones", verificarToken, mostrarTodasAsignaciones);
router.post("/obtenerAsignacionesPorEmpresa", verificarToken, obtenerAsignacionesPorEmpresa);


export default router;