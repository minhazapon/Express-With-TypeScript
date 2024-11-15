"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
//parser 
app.use(express_1.default.json());
// const logger = (req: any, res: any, next: any) =>{
//    console.log( req.url , req.method, req.hostName )
//    next();
// }
const useRouter = express_1.default.Router();
app.use('/', useRouter);
useRouter.get('/api/D1', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        name: '',
        name1: 'minhazul abedin apon'
    });
});
app.get('/', (req, res) => {
    res.send('express with typeScript!');
    console.log(req.body);
});
app.post('/', (req, res) => {
    res.send('Got Data');
    console.log(req.body);
});
exports.default = app;
