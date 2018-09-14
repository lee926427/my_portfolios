$(document).ready(function () {
    $("#courseTable").append('<tr><th class="t w">場次</th><th class="t w">時間</th><th class="t">主題</th></tr>');

    var id = 0;

    var secondUnit = 1000;
    var minuteunit = secondUnit * 60;
    var hourunit = minuteunit * 60;
    var dayunit = hourunit * 24;

    timeListen();

    function changecolor(n) {
        if (n % 2 == 0) {
            $("#courseTable").append('<tr class="w r"><td class="w r">' + (id + 1) + '</td><td class="w r">' + day[id].slice(5) + '</td><td class="r">' + topic[id] + '</td><tr>');
            id += 1;
        } else {
            $("#courseTable").append('<tr class="w b"><td class="w b">' + (id + 1) + '</td><td class="w b">' + day[id].slice(5) + '</td><td class="b">' + topic[id] + '</td><tr>');
            id += 1;
        }
    }

    function timeListen() {
        let d = new Date();
        return document.getElementById('booking').value =
            d.getFullYear() + '-'+('0' + d.getMonth() + 1) + '-' +'0'+ d.getDate();
    }

    $("#book").click(function () {
        day.push($("#booking").val());
        topic.push($("#message").val());
        changecolor(id);

        console.log(day);
        console.log(topic);
    });
});
/*
$("input[type=date]").change(Function() {
    var inputDate = $("input[type=date]").val();
    var splitText = inputDate.split("-");
    console.log(splitText[1]);
setMonthAndDate(splitText[1],splitText[2]);
});
*/