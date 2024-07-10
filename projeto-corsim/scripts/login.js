const email = document.querySelector('#iemail')
const senha = document.querySelector('#isenha')

function cadastraUsuario(emailUsuario, senhaUsuario) {
    const Usuario = {
        email: emailUsuario,
        senha: senhaUsuario
    }
    return Usuario
}

console.log(cadastraUsuario(email, senha))

function logar() {
    validaLogin()
}