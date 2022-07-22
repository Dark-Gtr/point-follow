const spark = document.querySelector('.spark__container')

const mouse = {x: 0, y:0};
const sparkPos = {x: 0, y:0}
sparkPos.x = spark.offsetLeft
sparkPos.y = spark.offsetTop
let vel = 1

window.addEventListener('mousemove', (data) => {
    mouse.x = data.clientX
    mouse.y = data.clientY
    
})


let teclaMaestra = false

const distancia = (a,b) => {
    return Math.sqrt(Math.pow(b.x - a.x) + Math.pow(b.y - a.y ))
}

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
        console.log(`distancia: ${distancia(sparkPos, mouse)}`);
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