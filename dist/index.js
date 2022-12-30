"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.post("/email", (req, res) => {
    const { fullname, domain } = req.body;
    if (!fullname || !domain) {
        res.status(400).send({ error: "Name and domain are required parameters" });
        return;
    }
    const email = generateEmailFromName(fullname, domain);
    res.send({ email });
});
function generateEmailFromName(name, domain) {
    const words = name.split(" ");
    const firstName = words[0];
    const lastName = words[words.length - 1];
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
