const menuList = document.querySelector(".submenu");
const btnSubMenu = document.getElementById("submenu");
    
btnSubMenu.addEventListener("click", showSubMenu);
    
function showSubMenu() {
menuList.classList.toggle("submenu--visible");
}

let mainPageColor = document.querySelector('.container');
const btnColorBlue = document.querySelector('.switch--blue');
const btnColorPink = document.querySelector('.switch--pink');
const btnColorRed = document.querySelector('.switch--red');
const btnColorBegie = document.querySelector('.switch--begie');

btnColorBlue.addEventListener('click', colorBlue);
function colorBlue() {
     if (colorPink || colorBegie || colorRed) {
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundBegie');
        mainPageColor.classList.add('main--backgroundBlue');
     }
    document.getElementById("main__img").src ="./img/Smeg 1.png"
} 
btnColorRed.addEventListener('click', colorRed);
function colorRed() {
    if (colorBlue || colorBegie || colorPink) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.remove('main--backgroundBegie')
        mainPageColor.classList.add('main--backgroundRed');
    }
    document.getElementById("main__img").src ="./img/Smeg 2.png"
}
btnColorPink.addEventListener('click', colorPink);
function colorPink() {
    if (colorBlue || colorBegie || colorRed) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundBegie')
        mainPageColor.classList.add('main--backgroundPink');
    }
    document.getElementById("main__img").src ="./img/Smeg 3.png"
} 
btnColorBegie.addEventListener('click', colorBegie);
function colorBegie() {
    if (colorBlue || colorPink || colorRed) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.add('main--backgroundBegie');
    }
    document.getElementById("main__img").src ="./img/Smeg 4.png"
}
