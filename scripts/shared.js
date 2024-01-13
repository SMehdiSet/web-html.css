let backdropVisibility = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdropVisibility.style.display = 'block'
    })
}

let modalActionNegative = document.querySelector('.modal__action--negative')
modalActionNegative.addEventListener('click', () => {
    modal.style.display = 'none'
    backdropVisibility.style.display = 'none'
})