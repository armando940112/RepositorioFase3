$(document).ready(function (){
    $(".link").click(function(){
        $("#frame").attr("src", ($(this).attr("data-url")));
    })
    crear_footer();
});

function crear_footer () {
    var footer = '<footer class="footcontacto"></footer>';
    document.getElementById('footer').innerHTML = footer;
}