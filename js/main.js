//Submenu 
const menuList = document.querySelector(".submenu");
const btnSubMenu = document.getElementById("submenu");
const main = document.querySelector("main");
    
btnSubMenu.addEventListener("click", showSubMenu);
  
//Submenu show & close function
function showSubMenu() {
menuList.classList.toggle("submenu--visible");
}
document.onclick = function (e) {
    if (e.target.id !== "submenu" && e.target.className !== "submenu") {
        menuList.classList.remove("submenu--visible");
    }
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

// Event listener for div with small kettles img-s
kettleBlueSmall.addEventListener('click', colorBlue);
kettleRedSmall.addEventListener('click', colorRed);
kettlePinkSmall.addEventListener('click', colorPink);
kettleBegieSmall.addEventListener('click', colorBegie);

//switch-buttons functions
btnColorBlue.addEventListener('click', colorBlue);
function colorBlue() {
     if (colorPink || colorBegie || colorRed) {
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundBegie');
        mainPageColor.classList.add('main--backgroundBlue');
     }
    for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].classList.remove('kettle--background');
    };
    kettleBlueSmall.classList.add('kettle--background');
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
    for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].classList.remove('kettle--background');
    };
    kettleRedSmall.classList.add('kettle--background');
    document.getElementById("main__img").src = "./img/Smeg 2.png";
}

btnColorPink.addEventListener('click', colorPink);
function colorPink() {
    if (colorBlue || colorBegie || colorRed) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundBegie')
        mainPageColor.classList.add('main--backgroundPink');
    }
    for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].classList.remove('kettle--background');
    };
    kettlePinkSmall.classList.add('kettle--background');
    document.getElementById("main__img").src = "./img/Smeg 3.png";
} 
btnColorBegie.addEventListener('click', colorBegie);
function colorBegie() {
    if (colorBlue || colorPink || colorRed) {
        mainPageColor.classList.remove('main--backgroundBlue');
        mainPageColor.classList.remove('main--backgroundRed');
        mainPageColor.classList.remove('main--backgroundPink');
        mainPageColor.classList.add('main--backgroundBegie');
    }
    for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].classList.remove('kettle--background');
    };
    kettleBegieSmall.classList.add('kettle--background');
    document.getElementById("main__img").src = "./img/Smeg 4.png";
}

for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].addEventListener('click', changeBackgroundColor);
};

function changeBackgroundColor() {
    for (let i = 0; i < kettlesAll.length; i++) {
        kettlesAll[i].classList.remove('kettle--background');
};
    this.classList.add('kettle--background');
}   