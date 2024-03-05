
const errorMarca = document.getElementById('errorMarca')
const errorNombre = document.getElementById('errorNombre')
const errorAño = document.getElementById('errorAño')
const errorPrecio = document.getElementById('errorPrecio')
const errorImg = document.getElementById('errorImg')

async function onSubmit(event) {

    event.preventDefault();

    errorMarca.innerHTML = ''
    errorNombre.innerHTML = ''
    errorAño.innerHTML = ''
    errorPrecio.innerHTML = ''
    errorImg.innerHTML = ''

    const data = {
        marca: event.target[0].value,
        nombre: event.target[1].value,
        año: event.target[2].value,
        precio: event.target[3].value,
        img: event.target[4].value
    }

    console.log(data);
    if(!data.marca) {
        errorMarca.innerHTML = 'Ingrese una marca.'
        return;
    }

    if(!data.nombre) {
        errorNombre.innerHTML = 'Ingrese un nombre.'
        return;
    }

    if(!data.año) {
        errorAño.innerHTML = 'Ingrese un año.'
        return;
    }
    
    if(!data.precio) {
        errorPrecio.innerHTML = 'Ingrese un precio.'
        return;
    }
    
    if(!data.img) {
        errorImg.innerHTML = 'Ingrese una imágen.'
        return;
    }

    const response = await fetch('http://127.0.0.1:5000/crear-coche', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status === 200) {

            // window.location.replace("/pages/admin.html")
            alert('Coche creado con éxito!')
        }

        else {

            alert('Ocurrió un error inesperado.')

        }

    })



}