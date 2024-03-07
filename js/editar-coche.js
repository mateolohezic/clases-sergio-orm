let idCoche
async function cargarCoche() {
    const query= window.location.search
    const urlParams = new URLSearchParams(query);
    const id = urlParams.get('id');
    idCoche = id
    const response = await fetch(`http://127.0.0.1:5000/modelos/${id}`).then(response => response.json())
    console.log(response)
    document.getElementById('marcaCrear').value = response.marca
    document.getElementById('nombreCrear').value = response.nombre
    document.getElementById('añoCrear').value = response.año
    document.getElementById('precioCrear').value = response.precio
    document.getElementById('imgCrear').value = response.img

}

cargarCoche();


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
console.log(data)
    try {
        const response = await fetch(`http://127.0.0.1:5000/modelo/${idCoche}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response)
        if (response.ok) { // Esto verifica si el código de estado está en el rango 200-299
            alert('Coche editado con éxito!');
        } else {
            const errorData = await response.json(); // Suponiendo que el servidor envía un mensaje de error en formato JSON
            alert('Error al editar coche: ' + errorData.message);
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        alert('Ocurrió un error al tratar de comunicarse con el servidor.');
    }
}