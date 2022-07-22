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

setInterval(() => {

    // si la posicion X de la particula es mayor al del mouse
    if (sparkPos.x > (mouse.x - 25)) {
        sparkPos.x = sparkPos.x - vel
        
    }

    // si la posicion Y de la particula es mayor al del mouse
    if (sparkPos.y > (mouse.y - 25)) {
        sparkPos.y = sparkPos.y - vel
    }

    // si la posicion X de la particula es menor al del mouse
    if (sparkPos.x < (mouse.x -25)) {
        sparkPos.x = sparkPos.x + vel
    }

    // su la posicion Y de la particula es menor al del mouse
    if (sparkPos.y < (mouse.y -25)) {
        sparkPos.y = sparkPos.y + vel
    }
    
    
    console.log(`distancia: ${distancia(sparkPos, mouse)}`);
    
    spark.style.top = `${sparkPos.y}px`
    spark.style.left = `${sparkPos.x}px`
    
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