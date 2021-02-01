"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloworld = void 0;
var CreateUser_1 = __importDefault(require("../services/CreateUser"));
function helloworld(request, response) {
    var user = CreateUser_1.default({
        email: 'amauri@gmail.com',
        password: '123456',
        techs: [
            'NodeJS',
            'ReactJS',
            'Typescript',
        ]
    });
    return response.json(user);
}
exports.helloworld = helloworld;
