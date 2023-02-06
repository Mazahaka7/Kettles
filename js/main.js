//Submenu 
const menuList = document.querySelector(".submenu");
const btnSubMenu = document.getElementById("submenu");
    
btnSubMenu.addEventListener("click", showSubMenu);
    
function showSubMenu() {
menuList.classList.toggle("submenu--visible");
}

//buttons
let mainPageColor = document.querySelector('.container');
const btnColorBlue = document.querySelector('.switch--blue');
const btnColorPink = document.querySelector('.switch--pink');
const btnColorRed = document.querySelector('.switch--red');
const btnColorBegie = document.querySelector('.switch--begie');

//small img of kettles
const kettlesAll = document.querySelectorAll('.main__kettle');
const kettleBlueSmall = document.querySelector('.kettle--blue');
const kettleRedSmall = document.querySelector('.kettle--red');
const kettlePinkSmall = document.querySelector('.kettle--pink');
const kettleBegieSmall = document.querySelector('.kettle--biege');

// Event listener for div with kettles img-s
kettleBlueSmall.addEventListener('click', colorBlue);
kettleRedSmall.addEventListener('click', colorRed);
kettlePinkSmall.addEventListener('click', colorPink);
kettleBegieSmall.addEventListener('click', colorBegie);

btnColorBlue.addEventListener('click', colorBlue);
function colorBlue() {
     if (colorPink || colorBegie || colorRed) {
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundBegie');
        mainPageColor.classList.add('main--backgroundBlue');
     }
    document.getElementById("main__img").src = "./img/Smeg 1.png";
    //let kettleBackground = kettleBlueSmall.style.backgroundColor = 'white';
} 
btnColorRed.addEventListener('click', colorRed);
function colorRed() {
    if (colorBlue || colorBegie || colorPink) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.remove('main--backgroundBegie')
        mainPageColor.classList.add('main--backgroundRed');
    }
    document.getElementById("main__img").src = "./img/Smeg 2.png";
   // let kettleBackground = kettleRedSmall.style.backgroundColor = 'white';
}
btnColorPink.addEventListener('click', colorPink);
function colorPink() {
    if (colorBlue || colorBegie || colorRed) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundBegie')
        mainPageColor.classList.add('main--backgroundPink');
    }
    document.getElementById("main__img").src = "./img/Smeg 3.png";
    //let kettleBackground = kettlePinkSmall.style.backgroundColor = 'white';
} 
btnColorBegie.addEventListener('click', colorBegie);
function colorBegie() {
    if (colorBlue || colorPink || colorRed) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.add('main--backgroundBegie');
    }
    document.getElementById("main__img").src = "./img/Smeg 4.png";
    //let kettleBackground = kettleBegieSmall.style.backgroundColor = 'white';
}

for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].addEventListener('click', backgroundChangeColor);
    }
function backgroundChangeColor() {
    this.classList.add('kettle--background');
    this.previousElementSibling.classList.remove('kettle--background');
    this.nextElementSibling.classList.remove('kettle--background');
}