const field = document.getElementById('field')
const ball = document.getElementById('ball')

field.addEventListener('click', (event)=> {
    let fieldCoords = field.getBoundingClientRect()
    
    let ballCoords = {
        top: 
            event.clientY - fieldCoords.y - field.clientTop - ball.clientHeight/2, 
        left: 
            event.clientX - fieldCoords.x - field.clientLeft - ball.clientWidth/2
    }

    if (ballCoords.top < 0) {
        ballCoords.top = 0
    } if (ballCoords.left < 0) {
        ballCoords.left = 0
    } if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight
    } if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth
    }

    ball.style.left = ballCoords.left + 'px'
    ball.style.top = ballCoords.top + 'px'
})