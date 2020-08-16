"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
const query_1 = __importDefault(require("./query"));
const mutation_1 = __importDefault(require("./mutation"));
const IResolversMap = Object.assign(Object.assign(Object.assign({}, type_1.default), query_1.default), mutation_1.default);
exports.default = IResolversMap;
