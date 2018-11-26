var request_service=require('../../services/request_sender.service.js');
async function sendOtp(receipientno, otp) {  // To mobilenumber 
    var text_sms = `${otp} is your One Time Password for easy2learn .Don't share this with anyone `;
    var apiKey = "apikey=" + encodeURI("IAs7r6HOrnI-aH3ByczeGRMCgfX1EJLMe76Hzz1sPj", "UTF-8");
    var message = "&message=" + encodeURI(text_sms, "UTF-8");
    var sender = "&sender=" + encodeURI("TXTLCL", "UTF-8");
    var numbers = "&numbers=" + encodeURI(receipientno, "UTF-8");

    // Send OTP
    var url = "https://api.textlocal.in/send/?" + apiKey + numbers + message + sender;
    var requestObj = {
        url: url,
        method: 'GET'
    }
    try {
        var res = await request_service.send(requestObj);

    } catch (error) {
        console.log(error)
    }
};
module.exports={sendOtp}