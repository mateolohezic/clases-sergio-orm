const database = [
    {
      "año": 2006,
      "id_df": 1,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Mercedes",
      "nombre": "CLK",
      "precio": 5000
    },
    {
      "año": 2020,
      "id_df": 2,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Mercedes",
      "nombre": "GLE",
      "precio": 34000
    },
    {
      "año": 2019,
      "id_df": 3,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Mercedes",
      "nombre": "SLS",
      "precio": 26000
    },
    {
      "año": 2021,
      "id_df": 4,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Fiat",
      "nombre": "SPIDER",
      "precio": 16000
    },
    {
      "año": 2023,
      "id_df": 5,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Fiat",
      "nombre": "Rose",
      "precio": 21000
    },
    {
      "año": 2018,
      "id_df": 6,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Fiat",
      "nombre": "Panda",
      "precio": 13000
    },
    {
      "año": 2018,
      "id_df": 7,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "volkswagen",
      "nombre": "Arteon",
      "precio": 15000
    },
    {
      "año": 2023,
      "id_df": 8,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Volkswagen",
      "nombre": "Golf",
      "precio": 32000
    },
    {
      "año": 2021,
      "id_df": 9,
      "img": "https://cdn.nettiauto.com/live/9854664/Mercedes-Benz-CLK-f6bd7c925bf62525-large.jpg",
      "marca": "Volkswagen",
      "nombre": "Tiguan",
      "precio": 21000
    }
]

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
                <h2 class="fs-5">${coche.nombre}</h2>
                <div>
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

printCoches(database)