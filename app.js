let section2 = document.querySelector ('.col-2')
let icon = document.querySelector('.iconjs')
let img = [ 'url(./2.jpg)'   , 'url(./5.jpg)'  ,'url(./7.webp)'  , 'url(./img\Rectangle 64.jpg)']

setInterval (function () {
     let bg = Math.floor(Math.random ()*img.length)
     let change = img[bg]
     section2.style.backgroundImage = change
    
},3000)