/**
 * Adicionar uma class = element.classList.add(className)
 * Remover uma class = element.classList.remove(className)
 * Remove ou adiciona uma class = element.classList.toggle(className)
 * 
 * Adiciona um valor a uma propriedade CSS
 * element.style.property = value
 * Ex: element.style.color = 'red'
 */

const modal = document.getElementById('modal')
const body = document.querySelector('body')

function openModal() {
    // modal.style.display = 'flex'
    modal.classList.toggle('modalClose')
    modal.classList.toggle('modalOpen')
    body.classList.toggle('bodyModal')
}

// function closeModal() {
//     // modal.style.display = 'none'
//     modal.classList.remove('modalOpen')
//     modal.classList.add('modalClose')
//     body.classList.remove('bodyModal')
// }