
$(document).ready(function () {
    $("#mainbody input").click(function () {
        let numberOfListItem = $("#mainbody ul li").length;
        $("#mainbody h1").text($("#mainbody ul li").eq(rand(numberOfListItem)).text() + " & " + $("#mainbody ul li").eq(rand(numberOfListItem)).text());
    });

    function rand(i) {
        let r = Math.floor(Math.random() * i);

        return r;
    }
});
