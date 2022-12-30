"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const emailRoute = require("./src/app/routes/email.route");
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/", emailRoute);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
