const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    profilePicture:{
        type:String
    },
    //هختار  Embedding لان الطالب مش هيشترك في كورسات كتير يعني مش هيشترك في 100 كورس مثلا فالبيانات عندي هتكون قليله
    courses:{
        type:[{
            name:String,
        }]
    }
},{strict: false})
const Student =mongoose.model('Student',studentSchema)
module.exports=Student;
