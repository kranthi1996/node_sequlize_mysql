function formatQueryData(data){
    if(!data){
        return data;
    }
    if(typeof data==='string'){
        return `'${data}'`
    }
    return data;
}
function getDate(){
    var date=new Date();
    var dateFormatted=date.toLocaleString();
    return dateFormatted;
}
function adminUserTypeId(){
      var user_type_id=30101;
      return user_type_id;
}

module.exports={formatQueryData,getDate,adminUserTypeId}