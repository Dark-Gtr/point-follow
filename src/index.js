const spark = document.querySelector('.spark__container')

let x = spark.offsetLeft
let y = spark.offsetTop
let mouseX = 0
let mouseY = 0
let vel = 1

window.addEventListener('mousemove', (data) => {
    mouseX = data.clientX
    mouseY = data.clientY
    
})


let teclaMaestra = false
window.addEventListener('keydown', (data) => {
    if (data.key === "Control") {
        teclaMaestra = true
        
    }
})
window.addEventListener('keyup', (data) => {
    if (data.key === 'Control') {
        teclaMaestra = false
        
    }

})

setInterval(() => {

    if (teclaMaestra) {
        // si la posicion X de la particula es mayor al del mouse
        if (x > (mouseX - 25)) {
            x = x - vel
            
        }
    
        // si la posicion Y de la particula es mayor al del mouse
        if (y > (mouseY - 25)) {
            y = y - vel
        }
    
        // si la posicion X de la particula es menor al del mouse
        if (x < (mouseX -25)) {
            x = x + vel
        }
    
        // su la posicion Y de la particula es menor al del mouse
        if (y < (mouseY -25)) {
            y = y + vel
        }
        spark.style.top = `${y}px`
        spark.style.left = `${x}px`
        console.log(`mouse-posX: ${mouseX} mouse-posY: ${mouseY} spark-posX: ${x} spark-posY ${y}`);
    }

    
    
    
    
}, 1 )

/* document.onmousemove = (data) => {

    if (data.ctrlKey === true) {
        teclaMaestra = true
    } else {

    }
    console.log(teclaMaestra);
    if (teclaMaestra === true) {
        spark.style.top = `${y}px`
        spark.style.left = `${x}px`
        y++
        x++
        console.log(teclaMaestra)
    } else {
        
    }
    
    
} */