function cerrarSesion(){
    localStorage.removeItem("logueado");
    window.location.href = "login.html";
}

function irAdministracion(){
    window.location.href = "admin.html";
}

const sesion = localStorage.getItem("logueado");

const botonSesion = document.getElementById("botonSesion");
const administracionNavbar = document.getElementById("administracionNavbar");

if(sesion){
    botonSesion.innerHTML = '<button onclick="cerrarSesion()" class="nav-link text-white" >Cerrar sesión</button>'
    administracionNavbar.innerHTML = '<a class="nav-link text-white" href="../pages/admin.html">Administración</a>'
}