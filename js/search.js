let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
    let _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}

setLeftValue();

function setRightValue() {
    let _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}

setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
    thumbLeft.classList.add("hover");
});

inputLeft.addEventListener("mouseout", function() {
    thumbLeft.classList.remove("hover");
});

inputLeft.addEventListener("mousedown", function() {
    thumbLeft.classList.add("active");
});

inputLeft.addEventListener("mouseup", function() {
    thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
    thumbRight.classList.add("hover");
});

inputRight.addEventListener("mouseout", function() {
    thumbRight.classList.remove("hover");
});

inputRight.addEventListener("mousedown", function() {
    thumbRight.classList.add("active");
});

inputRight.addEventListener("mouseup", function() {
    thumbRight.classList.remove("active");
});

let filterWrapper = document.querySelector('.search__filter-block')
let filterOpen = document.querySelector('.search__filter__mobile-block .open')
let filterClose = document.querySelector('.search__filter-block .close')

filterOpen.addEventListener('click', function() {
    filterWrapper.classList.remove('closed')
})

filterClose.addEventListener('click', function() {
    filterWrapper.classList.add('closed')
})

let burgerBtn = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__nav-block')
let headerLogo = document.querySelector('.header__logo-block');

burgerBtn.addEventListener('click', function() {
    this.classList.toggle('opened')
    headerLogo.classList.toggle('opened')
    headerMenu.classList.toggle('opened')
});

let includeText = document.querySelectorAll('.include-content .title')
let inputRadio = document.querySelectorAll('.filter-main-input');

if (window.innerWidth > 993) {
    inputRadio.forEach((input) => {
        input.setAttribute('type', 'checkbox')
    })
}

if (window.innerWidth > 1200) {
    includeText.forEach((includeElem) => {
        includeElem.textContent = 'Включено в стоимость';
    })
}

let popupS = document.getElementById('val-popup1');
let inputS = document.getElementById('calc-input1');
let resultBtnS = document.getElementById('calcBtn1');

inputS.addEventListener('click', function() {
    popupS.classList.remove('closed')
})

document.addEventListener('click', e => {
    let target = e.target;
    let its_popups = popupS.contains(target) || target === inputS || target === popupS;
    let its_btns = target === resultBtnS;
    if (!its_popups) {
        popupS.classList.add('closed');
    } else {
        popupS.classList.remove('closed')
    }
    if (its_btns) {
        popupS.classList.add('closed');
    }
})

let collectionOfsizesS = document.querySelectorAll('.value-calculate-input-s');
let resultS = 0;

resultBtnS.addEventListener('click', function(e) {
    e.preventDefault();
    resultS = collectionOfsizesS[0].value * collectionOfsizesS[1].value * collectionOfsizesS[2].value;
    resultS = resultS.toFixed(2);
    if (resultS % 2 === 0) {
        resultS = Math.floor(resultS);
    }
    inputS.value = resultS;
})