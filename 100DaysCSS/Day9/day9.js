const Luna = document.querySelector('.luna')
const Frame = document.querySelector('.frame')

function createCrater(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div")
        let tamaño = `${Math.floor(Math.random() * (5 - 12) + 12)}px`
        div.style.background = "#ece1a8";
        div.style.borderRadius = "50%"
        div.style.width = tamaño;
        div.style.height = tamaño;
        div.style.position = "absolute"
        div.style.top = `${Math.floor(Math.random() * (5 - 50) + 50)}px`
        div.style.left = `${Math.floor(Math.random() * (5 - 50) + 50)}px`
        Luna.appendChild(div)
    }
}

function gotasbg(num) {
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * (0 - 50) + 50)
        let random2 = Math.floor(Math.random() * (0 - 2) + 2)
        let gotas = document.createElement("div")
        gotas.classList.add('gotasbg')
        gotas.style.position = "absolute"
        gotas.style.zIndex = 20
        gotas.style.left = `${-20 + 38 * i}px`
        gotas.style.bottom = "90px"
        gotas.style.width = "8px"
        gotas.style.height = "8px"
        gotas.style.borderRadius = "50%"
        gotas.style.background = "#7FC1F9"
        gotas.style.animation = `drop ${0.7 + random2 / 10}s linear ${random / 25}s infinite`
        gotas.style.animationFillMode = "both"
        gotas.style.transformOrigin = "50% 100%"
        Frame.appendChild(gotas)
    }
}


function gotasmd(num) {
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * (0 - 50) + 50)
        let random2 = Math.floor(Math.random() * (0 - 2) + 2)
        let gotasmd = document.createElement("div")
        gotasmd.classList.add('gotasmd')
        gotasmd.style.left = `${-20 + 38 * i}px`
        gotasmd.style.opacity = "0.6"
        gotasmd.style.width = "6px"
        gotasmd.style.height = "6px"
        gotasmd.style.position = "absolute"
        gotasmd.style.zIndex = 20
        gotasmd.style.bottom = "90px"
        gotasmd.style.borderRadius = "50%"
        gotasmd.style.background = "#7FC1F9"
        gotasmd.style.animation = `drop ${1.7 + random2 / 10}s linear ${random / 25}s infinite`
        gotasmd.style.animationFillMode = "both"
        gotasmd.style.transformOrigin = "50% 100%"
        Frame.appendChild(gotasmd)
    }
}

function gotassm(num) {
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * (0 - 50) + 50)
        let random2 = Math.floor(Math.random() * (0 - 2) + 2)
        let gotassm = document.createElement("div")
        gotassm.style.left = `${-20 + 38 * i}px`
        gotassm.style.opacity = "0.3"
        gotassm.style.width = "4px"
        gotassm.style.height = "4px"
        gotassm.classList.add('gotassm')
        gotassm.style.position = "absolute"
        gotassm.style.zIndex = 20
        gotassm.style.bottom = "90px"
        gotassm.style.borderRadius = "50%"
        gotassm.style.background = "#7FC1F9"
        gotassm.style.animation = `drop ${1.9 + random2 / 10}s linear ${random / 25}s infinite`
        gotassm.style.animationFillMode = "both"
        gotassm.style.transformOrigin = "50% 100%"
        Frame.appendChild(gotassm)
    }
}

createCrater(11)

gotasbg(11)

gotasmd(11)

gotassm(11)