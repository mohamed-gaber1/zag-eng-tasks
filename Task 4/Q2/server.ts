const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
app.use(express.json());
const studentRoutes=require('./routes/student.route')
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("شغال");
    
}).catch((err:any)=>{
    console.log("مش شغال");
    
})

app.use('/api/students',studentRoutes)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
