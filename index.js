const $door1 = document.querySelector('#door1')
const $door2 = document.querySelector('#door2')
const $door3 = document.querySelector('#door3')
const $doors = document.querySelector('#doors-wrap')
const $text = document.querySelector('#text')

let prizeDoor = 0
let doors = [1, 2, 3]

function open(door) {
    door.classList.toggle('opened')
    if (doors[door] == 1) {
        door.textContent = 'Win!'
    }
    else {
        door.textContent = 'Empty!'
    }
}

function startGame() {
    prizeDoor = Math.floor(Math.random() * 3) + 1
    doors[prizeDoor - 1] = 0
    $text.textContent = 'Choose the door'

    $doors.addEventListener('click', (event) => {
        if (event.target == $door1 || event.target == $door2 || event.target == $door3) {
            event.target.style.color = 'red'
            const chosen = event.target.id[4] - 1

            if (doors[chosen] == 0) {
                doors.splice(chosen, 1)
                open(document.querySelector('#door' + doors[Math.floor(Math.random() * 2)]))
            }
            else {
                doors[chosen] = 0
                doors = doors.filter(i => i != 0)
                open(document.querySelector('#door' + doors[0]))
            }

            $text.textContent = 'Now you can change your choice'

            
        }
    })
}

startGame()