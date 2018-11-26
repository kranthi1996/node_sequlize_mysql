const db = require("../../../models/index.js");
const util = require("../../../util/util.js");


async function textLocalauth(){
    var command = `CALL bs_textlocal_auth(null, null)`;
    console.log(command)
    var data = await db.sequelize.query(command);
    return data
    //console.log(data)
}
module.exports={mvaayo_auth}