const spark = document.querySelector('.spark__container')

const mouse = {x: 0, y:0};
const sparkPos = {x: 0, y:0}
sparkPos.x = spark.offsetLeft
sparkPos.y = spark.offsetTop
let vel = 4

window.addEventListener('mousemove', (data) => {
    mouse.x = data.clientX
    mouse.y = data.clientY
    
})


let teclaMaestra = false

const distancia = (a,b) => {
    return Math.sqrt(Math.pow(b.x - a.x,2) + Math.pow(b.y - a.y,2 ))
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
        sparkPos.x = sparkPos.x + (( mouse.x - sparkPos.x) / (distancia(sparkPos, mouse)/ vel))
        sparkPos.y = sparkPos.y + (( mouse.y - sparkPos.y) / (distancia(sparkPos, mouse)/ vel))
        spark.style.top = `${sparkPos.y - 25}px`
        spark.style.left = `${sparkPos.x - 25}px`
        console.log(`distancia: ${(mouse.x - sparkPos.x) / distancia(sparkPos, mouse)}`);
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