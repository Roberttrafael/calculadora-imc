import { msgErro, weight, height, btnCalculo } from "./modal.js"

// Calcular IMC
export function resultIMC(event) {
    event.preventDefault()

    const imcValue = weight.value / (height.value * height.value)
    const calculoIMC = imcValue.toFixed(2)

    if (calculoIMC >= 0) {
        document.querySelector('.modalWrapper').classList.remove('hide')
        document.querySelector('.modalCard h2').innerText = `Seu IMC é de ${calculoIMC}`
        
        msgErro.classList.add('hide')
        
        weight.value = ''
        height.value = ''

    } else {
        msgErro.classList.remove('hide')
    }

}

