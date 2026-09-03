const express=require("express");
const router=express.Router();
const studentController=require('../controller/student.controller')
router.get('/',studentController.getAllStudent)
router.get("/:id", studentController.getStudentById);
router.post('/',studentController.creatStudent)
router.patch('/:id',studentController.updateStudent)
router.delete('/:id',studentController.deletestudent)
module.exports = router;
