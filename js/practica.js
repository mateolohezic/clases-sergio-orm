function saludar(nombre = 'usuario'){
    console.log('hola', nombre);
}

const boton = document.getElementById('botonParaSaludar')
// const boton2 = document.querySelector('#botonParaSaludar')

boton.addEventListener('click', ()=>{
    saludar('mateo')
})

// function onClickBoton(){
//     saludar()
//     saludar()
//     saludar()
//     const nombre = 'mateo'
//     saludar()
// }

// balanza entre lo facil y lo optimo