var db = require('../../models');
var util = require('../../util/util');

async function adminRegistration(email_id, password, user_type_id, dateCreated) {
    var command = `Call bs_admin_registration_upi(null,${util.formatQueryData(email_id)},${util.formatQueryData(password)},${util.formatQueryData(user_type_id)},${util.formatQueryData(dateCreated)},null,null,null,null,@o_return_value)`;
    var data1 = await db.sequelize.query(command);
    var data = await db.sequelize.query(`select @o_return_value;`)
    return data[0];
}
module.exports = { adminRegistration }