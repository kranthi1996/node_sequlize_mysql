function responseSender(req,res,data,statuscode,message){
            var statuscode=statuscode || 200 ;
         res.status(statuscode).send({
                data:data,
                meta:{
                     message:message,
                    statuscode:statuscode
                }
            })
};
module.exports=responseSender;