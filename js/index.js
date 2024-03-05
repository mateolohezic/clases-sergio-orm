const printCoches = (data) => {
  const contenedor = document.getElementById('contenedorCardsCochesHome')
  let tarjetas = ''
  data.map((coche) => {
      tarjetas += `
          <article class="cardCoche">
              <img src=${coche.img} alt="" />
              <div>
                  <h2>${coche.nombre}</h2>
                  <h3>${coche.marca}</h3>
                  <h4>${coche.año}</h4>
                  <h5>$${coche.precio}</h5>
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
// Funcion flecha


