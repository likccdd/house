const mainCard = document.querySelectorAll('.main-card')
const buttonCountries = document.querySelectorAll('.card-button-item')
let currentIndex = 0

const show = (index) => {
    mainCard[currentIndex].classList.remove('is-active')
    mainCard[index].classList.add('is-active')
    currentIndex = index
}

buttonCountries.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('france')) {
            buttonCountries[currentIndex].classList.remove('button-active')
            show(0)
            buttonCountries[0].classList.add('button-active')
        } else if (e.classList.contains('germany')) {
            buttonCountries[currentIndex].classList.remove('button-active')
            show(1)
            buttonCountries[1].classList.add('button-active')
        } else if (e.classList.contains('england')) {
            buttonCountries[currentIndex].classList.remove('button-active')
            show(2)
            buttonCountries[2].classList.add('button-active')
        }
    })
})
show(currentIndex)

const buttons = document.querySelectorAll('.card-button')
const cart = document.querySelector('.link-square')
let count = 0

buttons.forEach(element => {
    element.addEventListener('click', () => {
        count++ 
        cart.textContent = count
        cart.style.cssText = 'display : flex; '
    })
})