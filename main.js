$(document).ready(function () {
    getLightSwitchStatus();
    console.log($('#sw').val());
    $('#sw').on('click', function () {
        if ($('#sw').val() == "on") {
            up_data("開");
            $("img").attr('src', 'smart_home/pic_bulbon.gif');
            $('h1').text("電燈狀態: " + "開");
            getLightSwitchStatus();
            console.log('on');
        } else {
            up_data("關");
            $("img").attr('src', 'smart_home/pic_bulboff.gif');
            $('h1').text("電燈狀態: " + "關");
            getLightSwitchStatus();
        }
    });
});

function getLightSwitchStatus() {
    var url = "https://sheetdb.io/api/v1/5b975de745363/search?";
    let light_status = "開";
    var data = $.getJSON(url, {
            light_name: "main"
        })
        .done(
            function (msg) {
                console.log(msg);
                $('h1').text("電燈狀態: " + msg[0].light_switch);
                if (msg[0].light_switch == "開") {
                    $("img").attr('src', 'smart_home/pic_bulbon.gif');
                    light_status = msg[0].light_switch;
                    console.log($("img").attr('src', 'smart_home/pic_bulbon.gif'));
                } else {
                    $("img").attr('src', 'smart_home/pic_bulboff.gif');
                    $('#sw').bootstrapToggle('off')
                    light_status = msg[0].light_switch;
                }
            }
        )
        .fail(
            function (msg) {
                console.log('fail!');
            })
        .always(
            function (msg) {
                console.log('complete!');
            });
    up_data(light_status);

}

function up_data(status) {
    var thisqs = {};
    thisqs.light_switch = "開";
    thisqs.light_name = "main";
    $.ajax({
        dataType: "json",
        type: "PUT",
        url: "https://sheetdb.io/api/v1/5b975de745363/light_name/main",
        data: {
            data: [{
                light_name: "main",
                light_switch: status
            }]
        }
    });
}
