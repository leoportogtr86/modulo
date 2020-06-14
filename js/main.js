let machine = document.getElementById('machine')
let num = document.getElementById('num')
let resultado = document.getElementById('resultado')

var sampler = new Tone.Sampler({
    "C3": "../assets/audio/som1.mp3"
}, function () {

   



    machine.onclick = function () {

        console.log(Math.abs(Number(num.value)))

        resultado.innerHTML = Math.abs(Number(num.value))
        sampler.triggerAttack("C3")




    }
    //sampler will repitch the closest sample
    
}).toDestination()




