const express = require("express");
const app = express();
const Routes = require("./routes/custom.route");
const PORT = 3001;

app.use(express.json());

app.use("/api", Routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
