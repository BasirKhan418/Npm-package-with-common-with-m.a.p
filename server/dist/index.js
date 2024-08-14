"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const common_1 = require("@basirkhan/common");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/', (req, res) => {
    const parsedResult = common_1.SignUpSchema.safeParse(req.body);
    console.log(req.body);
    console.log(parsedResult);
    console.log(parsedResult.error);
    if (parsedResult.success) {
        res.status(200).send({ message: "Success", data: parsedResult.data });
    }
    else {
        res.status(400).send({ error: "Invalid Request error message schema twicked" });
    }
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
