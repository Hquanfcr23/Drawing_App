var color = document.querySelector('#color')
var erase = document.querySelector('#erase')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

// ctx.beginPath()
// ctx.moveTo(0, 0)
// ctx.lineTo(300, 300)
// ctx.stroke()

var pos1 = {
    x: 0,
    y: 0
}

var pos2 = {
    x: 0,
    y: 0
}

var isDrawing = false
var colorPain = '#000000'
var size = 10
sizeEl.innerText = size

canvas.addEventListener('mousedown', function(e) {
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }

    isDrawing = true
})

canvas.addEventListener('mousemove', function(e) {
    if(isDrawing) {
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }

        // ve fill
        ctx.beginPath()
        ctx.arc(pos1.x, pos1.y, size, 0, 2 * Math.PI)
        ctx.fillStyle = colorPain
        ctx.fill()

        //ve outline
        ctx.beginPath()
        ctx.moveTo(pos1.x, pos1.y)
        ctx.lineTo(pos2.x, pos2.y)
        ctx.strokeStyle = colorPain
        ctx.lineWidth = size * 2;
        ctx.stroke()

        pos1.x = pos2.x
        pos1.y = pos2.y

    }
})

canvas.addEventListener('mouseup', function(e) {
    isDrawing = false
})

color.addEventListener('change', function(e) {
    colorPain = e.target.value
})

erase.addEventListener('click', function(e) {
    colorPain = '#ffffff'
})

decrease.addEventListener('click', function(e) {
    size -= 5
    size = size >= 5 ? size : 5
    sizeEl.innerText = size
})

increase.addEventListener('click', function(e) {
    size += 5
    size = size <= 30 ? size : 30
    sizeEl.innerText = size
})

clear.addEventListener('click', function(e) {
    var canvasStats = canvas.getClientRects()[0]
    ctx.clearRect(0,0, canvasStats.width, canvasStats.height)
})

save.addEventListener('click', function(e) {
    var output = canvas.toDataURL()
    save.setAttribute('href', output)
})