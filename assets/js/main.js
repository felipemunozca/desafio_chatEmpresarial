/* Variables. */
const btnHamburger = document.querySelector('#hamburger');
const btnCerrar = document.querySelector('#close');
const menuLateral = document.querySelector('.navbar__list')

const listaTodosLosUsuarios = document.querySelector('.chat__users');
const ocultarMensajes = document.querySelector('.ocultar-chat');
const divMensajeBienvenida = document.querySelector('.chat__welcome-message');
const mensajeBienvenida = document.querySelector('.chat__welcome-message--change');

const cardUsuario1 = document.querySelector('#nombre-usuario-1');
const mensajesUsuario1 = document.querySelector('#chat-usuario-1');
const etiquetaNombre1 = document.querySelector('#etiqueta-nombre-1');
const iconoMensajesPendientes1 = document.querySelector('#mensajes-pendientes-usuario-1');
const btnVolverListaContactos1 = document.querySelector('#volver-lista-contactos-1');

const cardUsuario2 = document.querySelector('#nombre-usuario-2');
const mensajesUsuario2 = document.querySelector('#chat-usuario-2');
const etiquetaNombre2 = document.querySelector('#etiqueta-nombre-2');
const iconoMensajesPendientes2 = document.querySelector('#mensajes-pendientes-usuario-2');
const btnVolverListaContactos2 = document.querySelector('#volver-lista-contactos-2');

const cardUsuario3 = document.querySelector('#nombre-usuario-3');
const mensajesUsuario3 = document.querySelector('#chat-usuario-3');
const etiquetaNombre3 = document.querySelector('#etiqueta-nombre-3');
const iconoMensajesPendientes3 = document.querySelector('#mensajes-pendientes-usuario-3');
const btnVolverListaContactos3 = document.querySelector('#volver-lista-contactos-3');

const cardUsuario4 = document.querySelector('#nombre-usuario-4');
const mensajesUsuario4 = document.querySelector('#chat-usuario-4');
const etiquetaNombre4 = document.querySelector('#etiqueta-nombre-4');
const iconoMensajesPendientes4 = document.querySelector('#mensajes-pendientes-usuario-4');
const btnVolverListaContactos4 = document.querySelector('#volver-lista-contactos-4');

const cardUsuario5 = document.querySelector('#nombre-usuario-5');
const mensajesUsuario5 = document.querySelector('#chat-usuario-5');
const etiquetaNombre5 = document.querySelector('#etiqueta-nombre-5');
const iconoMensajesPendientes5 = document.querySelector('#mensajes-pendientes-usuario-5');
const btnVolverListaContactos5 = document.querySelector('#volver-lista-contactos-5');

const btnAdjuntar1 = document.querySelector('#btn-adjuntar-1');
const btnAdjuntar2 = document.querySelector('#btn-adjuntar-2');
const btnAdjuntar3 = document.querySelector('#btn-adjuntar-3');
const btnAdjuntar4 = document.querySelector('#btn-adjuntar-4');
const btnAdjuntar5 = document.querySelector('#btn-adjuntar-5');
const menuAdjuntar1 = document.querySelector('#menu-adjuntar-1');
const menuAdjuntar2 = document.querySelector('#menu-adjuntar-2');
const menuAdjuntar3 = document.querySelector('#menu-adjuntar-3');
const menuAdjuntar4 = document.querySelector('#menu-adjuntar-4');
const menuAdjuntar5 = document.querySelector('#menu-adjuntar-5');


/* Eventos. */
btnHamburger.addEventListener('click', mostrarMenuLateral);
btnCerrar.addEventListener('click', ocultarMenuLateral);

cardUsuario1.addEventListener('click', mostrarMensajesChat1);
btnVolverListaContactos1.addEventListener('click', volverListaUsuarios);
cardUsuario2.addEventListener('click', mostrarMensajesChat2);
btnVolverListaContactos2.addEventListener('click', volverListaUsuarios);
cardUsuario3.addEventListener('click', mostrarMensajesChat3);
btnVolverListaContactos3.addEventListener('click', volverListaUsuarios);
cardUsuario4.addEventListener('click', mostrarMensajesChat4);
btnVolverListaContactos4.addEventListener('click', volverListaUsuarios);
cardUsuario5.addEventListener('click', mostrarMensajesChat5);
btnVolverListaContactos5.addEventListener('click', volverListaUsuarios);

btnAdjuntar1.addEventListener('click', mostrarDropdown1);
btnAdjuntar2.addEventListener('click', mostrarDropdown2);
btnAdjuntar3.addEventListener('click', mostrarDropdown3);
btnAdjuntar4.addEventListener('click', mostrarDropdown4);
btnAdjuntar5.addEventListener('click', mostrarDropdown5);
window.addEventListener('resize', function(){
    let anchoContenedorMainAjustable = document.querySelector('#ancho-contenedor-chat').clientWidth;
    comprobarTamanoContenedorChat(anchoContenedorMainAjustable);

});

/* Eventos */
function mostrarMenuLateral(){
    btnHamburger.style.display = "none";
    btnCerrar.style.display = "block";
    menuLateral.classList.add('mostrar');
};

function ocultarMenuLateral(){
    btnHamburger.style.display = "block";
    btnCerrar.style.display = "none";
    menuLateral.classList.remove('mostrar');
}

function mostrarMensajesChat1() {
    const ancho = document.querySelector('#ancho-contenedor-chat').clientWidth;

    if (ancho <= 768) {
        divMensajeBienvenida.style.display = "none";
        listaTodosLosUsuarios.style.display = "none";
        etiquetaNombre1.classList.remove('chat__one-user-name--bold');
        iconoMensajesPendientes1.style.display = "none";
        mensajesUsuario1.style.display = "flex";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    } else 
    if (ancho > 769 ) {
        divMensajeBienvenida.style.display = "none";
        etiquetaNombre1.style.fontWeight = "normal";
        iconoMensajesPendientes1.style.display = "none";
        mensajesUsuario1.style.display = "flex";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    }
}

function mostrarMensajesChat2() {
    const ancho = document.querySelector('#ancho-contenedor-chat').clientWidth;

    if (ancho <= 768) {
        divMensajeBienvenida.style.display = "none";
        listaTodosLosUsuarios.style.display = "none";
        etiquetaNombre2.classList.remove('chat__one-user-name--bold');
        iconoMensajesPendientes2.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "flex";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    } else 
    if (ancho > 769 ) {
        divMensajeBienvenida.style.display = "none";
        etiquetaNombre2.style.fontWeight = "normal";
        iconoMensajesPendientes2.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "flex";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    }
}

function mostrarMensajesChat3() {
    const ancho = document.querySelector('#ancho-contenedor-chat').clientWidth;

    if (ancho <= 768) {
        divMensajeBienvenida.style.display = "none";
        listaTodosLosUsuarios.style.display = "none";
        etiquetaNombre3.classList.remove('chat__one-user-name--bold');
        iconoMensajesPendientes3.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "flex";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    } else 
    if (ancho > 769 ) {
        divMensajeBienvenida.style.display = "none";
        etiquetaNombre3.style.fontWeight = "normal";
        iconoMensajesPendientes3.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "flex";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    }
}

function mostrarMensajesChat4() {
    const ancho = document.querySelector('#ancho-contenedor-chat').clientWidth;

    if (ancho <= 768) {
        divMensajeBienvenida.style.display = "none";
        listaTodosLosUsuarios.style.display = "none";
        etiquetaNombre4.classList.remove('chat__one-user-name--bold');
        iconoMensajesPendientes4.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "flex";
        mensajesUsuario5.style.display = "none";
    } else 
    if (ancho > 769 ) {
        divMensajeBienvenida.style.display = "none";
        etiquetaNombre4.style.fontWeight = "normal";
        iconoMensajesPendientes4.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "flex";
        mensajesUsuario5.style.display = "none";
    }
}

function mostrarMensajesChat5() {
    const ancho = document.querySelector('#ancho-contenedor-chat').clientWidth;

    if (ancho <= 768) {
        divMensajeBienvenida.style.display = "none";
        listaTodosLosUsuarios.style.display = "none";
        etiquetaNombre5.classList.remove('chat__one-user-name--bold');
        iconoMensajesPendientes5.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "flex";
    } else 
    if (ancho > 769 ) {
        divMensajeBienvenida.style.display = "none";
        etiquetaNombre5.style.fontWeight = "normal";
        iconoMensajesPendientes5.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "flex";
    }
}

function volverListaUsuarios() {
    ocultarMensajes.style.display = "none"
    listaTodosLosUsuarios.style.display = "block";
    menuAdjuntar1.classList.remove('mostrar-dropdown');
    menuAdjuntar2.classList.remove('mostrar-dropdown');
    menuAdjuntar3.classList.remove('mostrar-dropdown');
    menuAdjuntar4.classList.remove('mostrar-dropdown');
    menuAdjuntar5.classList.remove('mostrar-dropdown');
    mensajesUsuario1.style.display = "none";
    mensajesUsuario2.style.display = "none";
    mensajesUsuario3.style.display = "none";
    mensajesUsuario4.style.display = "none";
    mensajesUsuario5.style.display = "none";
}

function mostrarDropdown1() {
    menuAdjuntar1.classList.toggle('mostrar-dropdown');
}
function mostrarDropdown2() {
    menuAdjuntar2.classList.toggle('mostrar-dropdown');
}
function mostrarDropdown3() {
    menuAdjuntar3.classList.toggle('mostrar-dropdown');
}
function mostrarDropdown4() {
    menuAdjuntar4.classList.toggle('mostrar-dropdown');
}
function mostrarDropdown5() {
    menuAdjuntar5.classList.toggle('mostrar-dropdown');
}

function comprobarTamanoContenedorChat(anchoContenedorMain) {
    if (anchoContenedorMain < 768) {
        /* mensajesUsuario1.style.display = "none"; */
        listaTodosLosUsuarios.style.display = "block";
        mensajeBienvenida.style.display = "none";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    } else 
    if (anchoContenedorMain > 769 ) {
        divMensajeBienvenida.style.display = "flex";
        mensajeBienvenida.style.display = "block";
        mensajesUsuario1.style.display = "none";
        mensajesUsuario2.style.display = "none";
        mensajesUsuario3.style.display = "none";
        mensajesUsuario4.style.display = "none";
        mensajesUsuario5.style.display = "none";
    }
}