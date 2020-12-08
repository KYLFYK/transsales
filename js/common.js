let burgerBtn = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__nav-block')
let headerLogo = document.querySelector('.header__logo-block');

burgerBtn.addEventListener('click', function() {
    this.classList.toggle('opened')
    headerLogo.classList.toggle('opened')
    headerMenu.classList.toggle('opened')
});

let findBtns = document.querySelectorAll('.main__find-type-btn');

findBtns.forEach( (elem) => {
    elem.addEventListener('click', function () {
        let selectedBtn = document.querySelector('.main__find-type-btn.selected')
        selectedBtn.classList.remove('selected')
        this.classList.add('selected')
    })
})

let popup = document.getElementById('val-popup');
let input = document.getElementById('calc-input');
let resultBtn = document.getElementById('calcBtn');

input.addEventListener('click', function() {
    popup.classList.remove('closed')
})

document.addEventListener('click', e => {
    let target = e.target;
    let its_popup = target === popup || popup.contains(target) || target === input;
    let its_btn = target === resultBtn;
    if (!its_popup) {
        popup.classList.add('closed');
    } else {
        popup.classList.remove('closed')
    }
    if (its_btn) {
        popup.classList.add('closed');
    }
})

let collectionOfsizes = document.querySelectorAll('.value-calculate-input');
let result = 0;

resultBtn.addEventListener('click', function(e) {
    e.preventDefault();
    result = collectionOfsizes[0].value * collectionOfsizes[1].value * collectionOfsizes[2].value;
    result = result.toFixed(2);
    if (result % 2 === 0) {
        result = Math.floor(result);
    }
    input.value = result;
})