var request_service=require('../../services/request_sender.service.js');
var responseSender=require('../../util/responseHandler');
async function sendSms(){   // mobilenumber we need to pass here 
 var data=await mvaayo_auth();
 var username=data[0].username;
 var password=data[0].password;
 var text_sms = `advisor posted the new idea `;
 var url = 'http://api.mVaayoo.com/mvaayooapi/MessageCompose?user=' + username + ':' + password + '&senderID=TEST SMS&receipientno=' + 919542541903 + '&dcs=0&msgtxt=' + text_sms + '&state=4';
 var requestObj={
    url: url,
    method:'GET'
  }
         try{
          var result = await request_service.send(requestObj);
         }
         catch(error){
           console.log(error)
         }
  }


module.exports={sendSms,sendOtp}  

