$(document).ready(function (){

    $("#frame").attr("src", "home.html");
    $(".link").click(function(){
        $("#frame").attr("src", ($(this).attr("data-url")));
    })
});
