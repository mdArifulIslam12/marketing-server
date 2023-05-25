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
exports.getSingleController = exports.getProductController = void 0;
const product_service_1 = require("./product.service");
const apiRespones_1 = __importDefault(require("../../utils/apiRespones"));
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, product_service_1.getProductService)();
    // res.status(200).json(data)
    (0, apiRespones_1.default)(res, 200, true, data);
});
exports.getProductController = getProductController;
const getSingleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, product_service_1.singleProductService)(id);
    (0, apiRespones_1.default)(res, 200, true, data);
});
exports.getSingleController = getSingleController;
