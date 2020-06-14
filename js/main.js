let machine = document.getElementById('machine')
let num = document.getElementById('num')
let resultado = document.getElementById('resultado')
let audio = document.getElementById('audio')

machine.onclick = function () {

    console.log(Math.abs(Number(num.value)))
    audio.play()

    resultado.innerHTML = Math.abs(Number(num.value))
    




}