const editarCoche = (coche) => {
    console.log(`Se edito a ${coche}`);
    window.location.href = `admin/editar-coche.html?id=${coche}`;
}

const eliminarCoche = async (idCoche) => {
    const confirmar = confirm("¿Estás seguro de que deseas eliminar este coche?");
    if (confirmar) {
        try {
            const response = await fetch(`http://127.0.0.1:5000/modelo/${idCoche}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Coche eliminado con éxito');
                console.log(response);
                getCoches(); // Recargar la lista de coches para reflejar la eliminación
            } else {
                alert('Error al eliminar el coche');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            alert('Ocurrió un error al tratar de comunicarse con el servidor.');
        }
    }
};


// Funcion flecha
const printCoches = (data) => {
    const contenedor = document.getElementById('cardsCRUDAdmin');
    let tarjetas = '';
    data.forEach((coche) => { // Utilizamos forEach para iterar sobre cada coche
        tarjetas += `
            <article class="cardCRUD">
                <div class="d-flex gap-2 align-items-center">
                    <img src=${coche.img} alt="" />
                    <h2 class="fs-5">${coche.nombre}</h2>
                </div>
                <div class="d-flex gap-2">                
                    <button type="button" onclick="editarCoche(${coche.id_df})">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button type="button" class="bg-danger" onclick="eliminarCoche(${coche.id_df})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </article>
        `;
    });
    contenedor.innerHTML = tarjetas;
};

let coches = []
const getCoches =async() => {
    const response = await fetch('http://127.0.0.1:5000/modelos').then((res) => res.json())
    console.log(response)
    coches = response
    printCoches(coches)
}
getCoches()