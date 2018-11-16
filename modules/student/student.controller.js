var studentService=require('./student.service');
var responseSender=require('../../util/responseHandler.js');
var errorHandler=require('../../util/errorHandler.js');
async function student(req,res){
    try{
        var name=req.body.name;
        var data=await studentService.student(name);
        return responseSender(req,res,data,200);
    }
   catch(err){
       errorHandler(req,res,{message:'we are getting error in posting the data',error:err})
   }
}
module.exports={student}