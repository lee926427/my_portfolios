/*
$(document).ready(function () {
    $("input").click(function () {
        alert("Hi");
    });
});

$(document).ready(function () {
    $("input").click(function () {
        $("H1").text("Hello");
    });
});
*/
$(document).ready(function () {
    $(".featurette-divider input").click(function () {
        let numberOfListItem = $(".featurette- ul li").length;
        $(".featurette-divider h1").text($(".featurette-divider ul li").eq(rand(numberOfListItem)).text() + " & " + $(".featurette-divider ul li").eq(rand(numberOfListItem)).text());
    });

    function rand(i) {
        let r = Math.floor(Math.random() * i);

        return r;
    }
});
