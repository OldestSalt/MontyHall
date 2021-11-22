const $door1 = document.querySelector('#door1')
const $door2 = document.querySelector('#door2')
const $door3 = document.querySelector('#door3')
const $doors = document.querySelector('#doors-wrap')
const $text = document.querySelector('#text')

let prizeDoor = 0

function startGame() {
    prizeDoor = Math.floor(Math.random() * 3) + 1
    let doors = [0, 0, 0]
    doors[prizeDoor] = 1
    $text.textContent = 'Choose the door'

    $doors.addEventListener('click', (event) => {
        if (event.target == $door1 || event.target == $door2 || event.target == $door3) {
            event.target.style.color = 'red'
            const chosen = event.target.id[4]

            if (chosen == prizeDoor) {
                doors.splice(prizeDoor, 1)
                
            }
        }
    })
}

startGame()