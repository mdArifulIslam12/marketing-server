"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const dbConnect_1 = require("./app/utils/dbConnect");
const app = (0, express_1.default)();
exports.app = app;
// useing cors 
app.use((0, cors_1.default)());
// useing prase
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/// fille ejs
app.set('views engine', 'ejs');
// db connection
(0, dbConnect_1.dbConncet)();
// We all is route import
const products_routes_1 = __importDefault(require("./app/modules/product/products.routes"));
// here is default route
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("index.ejs");
}));
// custom is route
app.use('/api/v1/bolgs', products_routes_1.default);
