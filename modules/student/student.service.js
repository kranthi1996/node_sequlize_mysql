var studentDbAction=require('./student.dbaction.js');
async function student(name){
    return await studentDbAction.student(name);
};
module.exports={student};