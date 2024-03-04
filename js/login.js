const admin = {
    email: 'admin@admin.com',
    password: 'Admin123'
}

const errorCorreo = document.getElementById('errorCorreo')
const errorContraseña = document.getElementById('errorContraseña')

function onSubmit(event){
    event.preventDefault();
    errorCorreo.innerHTML = ''
    errorContraseña.innerHTML = ''
    const email = event.target[0].value;
    const password = event.target[1].value;
    console.log(errorCorreo);

    if(!email){
        console.log('Porfavor ingrese un correo.');
        errorCorreo.innerHTML = 'Porfavor ingrese un correo.'
        return;
    }

    if(!password){
        console.log('Porfavor ingrese una contraseña.');
        errorContraseña.innerHTML = 'Porfavor ingrese un correo.'
        return;
    }

    // const response = fetch('http://localhost:8000/auth', { email, password })

    if(email !== admin.email){
        console.log('Correo incorrecto.');
        errorCorreo.innerHTML = 'Correo incorrecto.'
        return;
    }

    if(password !== admin.password){
        console.log('Contraseña incorrecta.');
        errorContraseña.innerHTML = 'Contraseña incorrecta.'
        return;
    }

    window.location.replace('/index.html')
}