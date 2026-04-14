function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
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
