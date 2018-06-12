"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const port = 8000;
const app = express();
app.get('/', (req, res) => res.send("working"));
app.listen(port, () => console.log(`server listening on port ${port}`));
//# sourceMappingURL=server.js.map