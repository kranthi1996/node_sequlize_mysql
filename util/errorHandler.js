function errorHandler(req,res,errObj,statusCode){
    var statusCode=statusCode || 401;
    res.status(401).send(errObj)
}
module.exports=errorHandler;
