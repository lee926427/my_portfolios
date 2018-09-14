var topic = [
    /*
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "萬聖節"
    */
];
var day = [
    
];
var startDate = new Date();
//console.log(startDate);
function setMonthAndDate(startMonth, startDay) {


    startDate.setMonth(startMonth - 1, startDay);
    //startDate.setDate(startDate.getDate()+startDay-31);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

}
setMonthAndDate(12, 31);
