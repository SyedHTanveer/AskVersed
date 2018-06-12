"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 8000;
const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.get('/', (req, res) => {
    console.log("received '/' get request");
    res.send("working");
});
app.get('/auth', (req, res) => {
    console.log("received '/auth' GET request");
    if (req.cookies && req.cookies.authorization == "yes") {
        console.log("is authorized");
        return res.sendStatus(200);
    }
    else {
        console.log("is not authorized");
        return res.sendStatus(404);
    }
});
app.post('/auth', (req, res) => {
    console.log("received '/auth' POST request");
    res.cookie("authorization", "yes");
    console.log("set res.cookie");
    return res.sendStatus(200);
});
app.listen(port, () => console.log(`server listening on port ${port}`));
//# sourceMappingURL=server.js.map