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
module.exports={formatQueryData,getDate}