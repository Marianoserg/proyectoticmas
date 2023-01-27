

//Funcion menu viewport celular
const initApp = () => {
    const menuAbrir = document.getElementById('menuabrir')
    const menuMovil = document.getElementById('menumovil')

    const toggleMenu = () => {
     menuMovil.classList.toggle('hidden')
     menuMovil.classList.toggle('flex')
}
    menuAbrir.addEventListener('click', toggleMenu)
    menuMovil.addEventListener('click', toggleMenu)
}
document.addEventListener('DOMContentLoaded', initApp)