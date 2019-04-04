$(document).ready(function (){
    crear_menu();
    crear_footer();
});

function crear_menu () {
    var menu = '<nav title="Menú">'+
                    '<ul class="menu">'+
                        '<li class="activo">'+
                            '<a href="index.html" class="menu" target="contenido-iframe" title="Inicio." tabindex="1" accesskey="I">Inicio</a>'+
                        '</li>'+
                        '<div class="menu-header">'+
                            '<li>'+
                                '<a href="modelo-datos.html" class="menu" target="contenido-iframe" title="Modelado de Datos." tabindex="2" accesskey="M">Modelado de Datos</a>'+
                            '</li>'+
                            '<div class="contenido-submenu">'+
                                '<li>'+
                                    '<a href="modelo-datos.html" class="menu" target="contenido-iframe" tabindex="1" accesskey="M" title="Introduccion Al Modeladode Datos.">Introduccion Al Modelado de Datos</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="entidad-relacion.html" class="menu" target="contenido-iframe" tabindex="2" accesskey="M" title="Modelo Entidad Relación.">Modelo Entidad Relación</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="diapositivas-entidad-relacion.html" class="menu" target="contenido-iframe" tabindex="3" accesskey="D" title="Diagrama Entidad Relación.">Diagrama Entidad Relación</a>'+
                                '</li>'+
                            '</div>'+
                        '</div>'+
                        '<li>'+
                            '<a href="otros-recursos.html" class="menu" target="contenido-iframe" tabindex="3" accesskey="O" title="Otros recursos.">Otros recursos</a>'+
                        '</li>'+
                        '<li>'+
                            '<a href="autores.html" class="menu" target="contenido-iframe" tabindex="4" accesskey="A" title="Autores.">Autores</a>'+
                        '</li>'+
                    '</ul>'+
                '</nav>';
    document.getElementById('nav_menu').innerHTML = menu;
}


function crear_footer () {
    var footer = '<footer class="footcontacto"></footer>';
    document.getElementById('footer').innerHTML = footer;
}