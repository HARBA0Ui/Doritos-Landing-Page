const img = document.querySelector('.img')
const hamburger = document.querySelector('.hamburger')
const links = document.querySelector('ul')

function imgChange(e){
    img.src = e
}


function backgroundChange(e){
    document.querySelector('.container').style.background = e
}


function activeMenu(){
    hamburger.classList.toggle('active')
    links.classList.toggle('active')
}

hamburger.addEventListener('click', activeMenu)

console.log(links)