var userService=require('./user.service');
var responseSender=require('../../util/responseHandler');
var errorHandler=require('../../util/errorHandler');
var communication=require('../../communication/sms/sendSms.js')
async function adminRegistration(req,res){
    try{  
        var {email_id,password}=req.body;
        var data=await userService.adminRegistration(email_id,password);
        console.log(data);
        return responseSender(req,res,data,200);
    }
   catch(err){
       errorHandler(req,res,{message:'we are getting error in posting the data'})
   }
}
async function sendMobileOtp(req,res){
    try{
        var mobile_number=req.body.mobile_number;
        var otp = Math.floor(100000 + Math.random() * 900000);
          communication.sendOtp(mobile_number,otp)
          return responseSender(req,res,'otp sent',200);
    }
     catch(err){
        errorHandler(req,res,{message:'we are getting error in the sending otp'})
     }
};
// async function verifyMobilenumber(mobilenumber) {
//     var result = await userService.verifyMobilenumber(mobilenumber);
//     return result[0]['@result'];
//   }
  
//   async function sendOtp(req, res) {
//     var mobilenumber = req.body.mobilenumber;
//     var mob_number=mobilenumber.split('+')
//     var result = await verifyMobilenumber(mob_number[1]);
//     if(result =="mobilenumber is already existed in bs_user table"){
//       responseSender(req, res, "mobilenumber is already existed in bs_user db");
//     }else{
//       if (result == 'mobilenumber is not  existed') {
//         var otp = Math.floor(100000 + Math.random() * 900000);
//         try {
//           console.log("mobile number is not existed in db, this is new number")
//           var to_mobilenumber_otp = communication.sendOtp(mobilenumber, otp)
//           var result = await userService.createOtp(mobilenumber, otp);
//           responseSender(req, res, "otp created sent to mobilenumber")
//         }
//         catch (error) {
//           errorHandler(req, res, { msg: "Unknown error" }, 500);
//         }
//       } else {
//         console.log("mobile number is  existed in bs_mobile db")
//         var otp = Math.floor(100000 + Math.random() * 900000);
//         try {
//           var to_mobilenumber_otp = communication.sendOtp(mobilenumber, otp)
//           var result = await userService.resendOtp(mobilenumber, otp);
//           responseSender(req, res, "otp created sent to mobilenumber");
//         } catch (error) {
//           errorHandler(req, res, { msg: "Unknown error" }, 500);
//         }
//       }
//     } 
//   }
  
//   async function resendOtp(req, res) {
//     var mobilenumber = req.body.mobilenumber;
//     var otp = Math.floor(100000 + Math.random() * 900000);
//     try {
//       var to_mobilenumber_otp = communication.sendOtp(mobilenumber, otp)
//       var result = await userService.resendOtp(mobilenumber, otp);
//       responseSender(req, res, "otp created sent to mobilenumber");
//     }
//     catch (error) {
//       errorHandler(req, res, { msg: "Unknown error" }, 500);
//     }
//   }
  
//   async function verifyOtp(req, res) {    //  get otp and verify orp 
//     var now = new Date();
//     console.log("time more than 5 min of current" + now)
  
//     var client_otp = req.body.otp;
//     var mobilenumber = req.body.mobilenumber;
//     console.log("otp from client side" + client_otp);
  
//     try {
//       //console.log()
//       var data = await userService.verifyOtp(mobilenumber);
//       console.log("otp from db side" + JSON.stringify(data));
  
//       var db_otp = data[0].otp_code;
  
//       if (data[0].hasOwnProperty("date_created")) {
//         var db_otp_date_time = data[0].date_created;
//         console.log("yes, i have date_created property");
//       } else {
//         var db_otp_date_time = data[0].date_updated;
//         console.log("yes, i have date_updated property");
//       }
//       console.log("this is db_time" + db_otp_date_time);
  
//       db_otp_date_time.setMinutes(db_otp_date_time.getMinutes() - 330);
  
//       console.log("this ex time after add +5.30" + "  " + db_otp_date_time);
  
//       var diff = Math.abs(now - db_otp_date_time); // milliseconds
//       console.log("diff in " + diff)
//       var diff_time_min = util.millisToMinutesAndSeconds(diff)
  
//       console.log("In min" + diff_time_min)
  
//       if (client_otp == db_otp) {
//         if (diff_time_min <= 5) {
//           responseSender(req, res, "otp_matched");
//         } else {
//           errorHandler(req, res, { msg: "otp time is expired" }, 500);
//         }
//       } else {
//         errorHandler(req, res, { msg: "otp is not matched" })
//       }
//     } catch (err) {
//       errorHandler(req, res, { msg: "something went please check once again " }, 500);
//     }
//   }
  
  
module.exports={adminRegistration,sendMobileOtp}