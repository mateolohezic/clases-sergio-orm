const editarCoche = (coche) => {
    console.log(`Se edito a ${coche}`);
}

const eliminarCoche = (coche) => {
    console.log(`Se elimino a ${coche}`);
}

// Funcion flecha
const printCoches = (data) => {
    const contenedor = document.getElementById('cardsCRUDAdmin')
    let tarjetas = ''
    data.map((coche) => {
        tarjetas += `
            <article class="cardCRUD">
                <div class="d-flex gap-2 align-items-center">
                <img src=${coche.img} alt="" />
                <h2 class="fs-5">${coche.nombre}</h2>
                </div>

                <div class="d-flex gap-2">
                
                    <button type="button" onclick="editarCoche('${coche.nombre}')">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button type="button" class="bg-danger" onclick="eliminarCoche('${coche.nombre}')">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </article>
        `
    })
    contenedor.innerHTML = tarjetas
}
let coches = []
const getCoches =async() => {
    const response = await fetch('http://127.0.0.1:5000/modelos').then((res) => res.json())
    console.log(response)
    coches = response
    printCoches(coches)
}
getCoches()