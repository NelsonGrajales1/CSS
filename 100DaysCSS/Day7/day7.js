document.querySelector('.busqueda-icon').addEventListener('click', () => {
    document.querySelector('.input').classList.toggle("active")
})


document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.panel').classList.toggle("desplazar")
    document.querySelector('.menu').classList.toggle("desplazar-menu")
})