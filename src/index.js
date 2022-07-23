const spark = document.querySelector('.spark__container')

const mouse = {x: 0, y:0};
const sparkPos = {x: 0, y:0}
sparkPos.x = spark.offsetLeft
sparkPos.y = spark.offsetTop
let vel = 4



if (document.querySelector("body").clientWidth < 1024) {
    window.addEventListener('touchmove', (data) => {
        mouse.x = data.touches[0].clientX
        mouse.y = data.touches[0].clientY
    })
} else {
    window.addEventListener('mousemove', (data) => {
        mouse.x = data.clientX
        mouse.y = data.clientY
    })
}




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


    if (teclaMaestra && document.querySelector("body").clientWidth > 1024) {    
        
        sparkPos.x = sparkPos.x + (( mouse.x - sparkPos.x) / (distancia(sparkPos, mouse)/ vel))
        sparkPos.y = sparkPos.y + (( mouse.y - sparkPos.y) / (distancia(sparkPos, mouse)/ vel))
        spark.style.top = `${sparkPos.y - 25}px`
        spark.style.left = `${sparkPos.x - 25}px`
        //console.log(`sparkPosx: ${sparkPos.x + 2} --- mousePosx:${mouse.x}`);
    }
    if (document.querySelector("body").clientWidth < 1024) {
        sparkPos.x = sparkPos.x + (( mouse.x - sparkPos.x) / (distancia(sparkPos, mouse)/ vel))
        sparkPos.y = sparkPos.y + (( mouse.y - sparkPos.y) / (distancia(sparkPos, mouse)/ vel))
        spark.style.top = `${sparkPos.y - 25}px`
        spark.style.left = `${sparkPos.x - 25}px`
        
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