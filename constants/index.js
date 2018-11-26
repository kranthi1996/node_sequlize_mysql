const successCodes = {
    SUCCESS_USER_CREATED:{
        code:"SUCCESS_USER_CREATED",
        message:"Account Created Successfully",
    },
    SUCCESS_REGISTERED:{
        code:"SUCCESS_REGISTERED",
        message:"Registered Successfully",
    },
    SUCCESS_VIDEO_UPLOADED:{
        code: "SUCCESS_VIDEO_UPLOADED",
        message:"VIDEO uploaded successfuly"
    },
    SUCCESS_USER_UPDATED: {
        code: "SUCCESS_USER_UPDATED",
        message: "Your Details Uploaded Successfully"
    }
}

const errorCodes = {
    "ERR_INVALID_PASSWORD":{
        code:"ERR_INVALID_PASSWORD",
        message:"Password is invalid"
    },
    "ERR_INVALID_USER_OR_PASSWORD":{
        code:"ERR_INVALID_USER_OR_PASSWORD",
        message:"Email or password is wrong"
    },
    "ERR_USER_NOT_EXIST":{
        code:"ERR_USER_NOT_EXIST",
        message:"User doesnot exists"
    },
    "ERR_USER_NOT_EXIST":{
        code:"ERR_USER_NOT_EXIST",
        message:"User doesnot exists"
    },
    "ERR_USER_CREATE":{
        code:"ERR_USER_CREATE",
        message:"Error in Creating User"
    },
    "ERR_SESSION_EXPIRED":{
        code:"ERR_SESSION_EXPIRED",
        message:"Session has expired , Please login again"
    },
    "ERR_UNKNOWN":{
        code:"ERR_UNKNOWN",
        message:"Unknown error occured"
    }
    // "ERR_LOGIN":{
    //     code: "ERR_NEWUSER_LOGIN",
    //     message: "Please verify your email-id to login"
    // }

}


module.exports = {
    successCodes,
    errorCodes
}
