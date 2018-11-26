var userDbAction=require('./user.dbaction.js');
var util=require('../../util/util.js');
async function adminRegistration(email_id,password){
    var dateFormatted = util.getDate();;
    var dateCreated   = dateUpdated = dateFormatted;
    var user_type_id  = util.adminUserTypeId();
    return await userDbAction.adminRegistration(email_id,password,user_type_id,dateCreated);
};
module.exports={adminRegistration};


