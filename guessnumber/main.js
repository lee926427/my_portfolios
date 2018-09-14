$(document).ready(function () {
    var limit_time = 3;
    $('#enter').click(function () {
        timer(limit_time);
        $('#msg').append("<p>"+setT(limit_time)+"</p>");
    });

    function timer(t) {
        setTimeout(function () {
            alert('好可惜沒答出來~');
        }, t * 1000);

        function setT(t) {
            for (i = 0; i < t * 1000; i+=1000) {
                return i / 1000;


            }

        }
    }
});
