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
exports.dbConncet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("./logger");
const { URL } = process.env;
const dbConncet = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!URL) {
            logger_1.log.error('Not is url found .env files');
            process.exit(1);
        }
        yield mongoose_1.default.connect(URL);
        logger_1.log.info('Database Connected');
    }
    catch (error) {
        logger_1.log.error(error.message);
    }
});
exports.dbConncet = dbConncet;
