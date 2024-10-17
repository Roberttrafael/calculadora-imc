
import { btnCalculo, weight, height, msgErro } from "./modal.js"
import { resultIMC } from "./utils.js"

btnCalculo.addEventListener('click', resultIMC)


// Fechar o resultado do IMC:
const closeCard = document.querySelector('.close')

import { closeIMC } from "./closeIMCbutton.js"
closeCard.addEventListener('click', closeIMC)


// Fechar no ESC
window.addEventListener('keydown', handleKeydown)


function handleKeydown() {
    if (event.key === 'Escape') {
        closeIMC()
    }
}




