var input = document.getElementById('senha')
var btn = document.getElementById('btn-senha')
var erro = document.getElementById('erro-senha')

btn.addEventListener('click', function () {

    if (input.type === 'password') {
        input.type = 'text'
        btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        input.type = 'password'
        btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }

})

input.addEventListener('input', function () {

    if (/[^0-9]/.test(this.value)) {
        erro.textContent = 'A senha deve conter apenas números'
        this.classList.add('input-erro')

        this.value = this.value.replace(/[^0-9]/g, '')
    } else {
        erro.textContent = ''
        this.classList.remove('input-erro')
    }

})
