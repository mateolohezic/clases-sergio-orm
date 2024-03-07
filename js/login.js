const admin = {
    email: 'admin@admin.com',
    password: 'Admin123'
}

const errorCorreo = document.getElementById('errorCorreo')
const errorContraseña = document.getElementById('errorContraseña')

async function onSubmit(event) {
    event.preventDefault();
    errorCorreo.innerHTML = ''
    errorContraseña.innerHTML = ''
    const email = event.target[0].value;
    const password = event.target[1].value;


    if (!email) {
        console.log('Porfavor ingrese un correo.');
        errorCorreo.innerHTML = 'Porfavor ingrese un correo.'
        return;
    }

    if (!password) {
        console.log('Porfavor ingrese una contraseña.');
        errorContraseña.innerHTML = 'Porfavor ingrese un correo.'
        return;
    }

    const response = await fetch('http://127.0.0.1:5000/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(response => {
        if (response.status === 200) {
            localStorage.setItem('logueado', true)
            window.location.replace("/pages/admin.html")
        }

        else {

            errorContraseña.innerHTML = 'Usuario o contraseña incorrectos.'

        }

    })



}