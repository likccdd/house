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
            show(0)
        } else if (e.classList.contains('germany')) {
            show(1)
        } else if (e.classList.contains('england')) {
            show(2)
        }
    })
})

show(currentIndex)