"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.use(express.json());
const router = require('./routes/task.routes');
app.use("/api", router);
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map