function mostrarSenha(){
    var inputPass = document.getElementById('senha')

    if(inputPass.type === 'password'){
        inputPass.type = 'text'
    } else {
        inputPass.type = 'password'
    }
}

var input = document.getElementById('senha')
var erro = document.getElementById('erro-senha')

input.addEventListener('input', function () {
    if (/[^0-9]/.test(this.value)) {
        erro.textContent = 'A senha deve conter apenas números'
        this.value = this.value.replace(/[^0-9]/g, '')
    } else {
        erro.textContent = ''
    }
})
