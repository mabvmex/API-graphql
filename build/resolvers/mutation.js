"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const data_store_1 = require("../data/data.store");
const mutation = {
    Mutation: {
        cursoNuevo(__, { curso }) {
            const itemCurso = {
                id: String(data_store_1.database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                classes: curso.classes,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: [],
            };
            if (data_store_1.database.cursos.filter((cursoExiste) => cursoExiste.title === itemCurso.title).length === 0) {
                data_store_1.database.cursos.push(itemCurso);
                return itemCurso;
            }
            return {
                id: "- 1",
                title: `El curso ya existe con este titulo: ${curso.title}`,
                description: "",
                classes: -1,
                time: 0.0,
                level: "TODOS",
                logo: "",
                path: "",
                teacher: "",
                reviews: [],
            };
        },
        modificarCurso(__, { curso }) {
            const elementoExiste = lodash_1.default.findIndex(data_store_1.database.cursos, function (o) {
                return o.id === curso.id;
            });
            if (elementoExiste > -1) {
                const valoraciones = data_store_1.database.cursos[elementoExiste].reviews;
                curso.reviews = valoraciones;
                data_store_1.database.cursos[elementoExiste] = curso;
                return curso;
            }
            return {
                id: "- 1",
                title: `El curso ya existe en la base de datos`,
                description: "",
                classes: -1,
                time: 0.0,
                level: "TODOS",
                logo: "",
                path: "",
                teacher: "",
                reviews: [],
            };
        },
        eliminarCurso(__, { id }) {
            const borrarCurso = lodash_1.default.remove(data_store_1.database.cursos, function (curso) {
                return curso.id === id;
            });
            if (borrarCurso[0] === undefined) {
                return {
                    id: "- 1",
                    title: `El curso no se puede borrar porque no existe en la base de datos`,
                    description: "",
                    classes: -1,
                    time: 0.0,
                    level: "TODOS",
                    logo: "",
                    path: "",
                    teacher: "",
                    reviews: [],
                };
            }
            return borrarCurso[0];
        },
    },
};
exports.default = mutation;
