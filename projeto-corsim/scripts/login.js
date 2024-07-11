const email = document.querySelector('#iemail').value
const senha = document.querySelector('#isenha').value

function logar(emailUsuario, senhaUsuario) {
    if(emailUsuario.length < 4) {
        return console.log('O email deve ter no mínimo 4 caracteres')
    }
    if(senhaUsuario.length < 8) {
        return console.log('A senha deve ter pelo menos 8 caracteres')
    }
}

logar(email, senha)