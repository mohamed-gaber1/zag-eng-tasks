const express=require('express')
const router=express.Router();
const {get_All,get_By_Id,create_data,update_data,remove_data} = require("../controllers/task.controller");
router.get ('/tasks',get_All);
router.get ('/tasks/:id',get_By_Id);
router.post ('/tasks',create_data);
router.patch ('/tasks/:id',update_data);
router.delete ('/tasks/:id',remove_data);
module.exports = router;