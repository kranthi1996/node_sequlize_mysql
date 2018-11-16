var db=require('../../models');
var util=require('../../util/util.js');
async function student(name){
    var command=`Call student_post(null,${util.formatQueryData(name)})`;
    var data=db.sequlize.query(command);
    return data;
}
module.exports={student}