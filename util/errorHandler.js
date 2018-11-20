function errorHandler(req,res,errObj,statusCode){
    var statusCode=statusCode || 401;
    errObj.statusCode=statusCode;
    res.status(401).send(errObj)
}
module.exports=errorHandler;
