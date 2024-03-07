const logueado = localStorage.getItem('logueado')
if (!logueado) {
    window.location.replace("/index.html")
}