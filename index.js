const $door1 = document.querySelector('#door1')
const $door2 = document.querySelector('#door2')
const $door3 = document.querySelector('#door3')
const $doors = document.querySelector('#doors-wrap')
const $text = document.querySelector('#text')
const $again = document.querySelector('#again')

let doors = [], opened = 0, prizeDoor = 0, chosen = -1, finished = false

function open(door) {
    door.classList.add('opened')
    if (door.id[4] == prizeDoor) {
        door.textContent = 'Win!'
        door.setAttribute('style','background-color: yellow !important')
    }
    else {
        door.textContent = 'Empty!'
    }
}

function startGame() {
    finished = false
    doors = [1, 2, 3]
    prizeDoor = Math.floor(Math.random() * 3) + 1
    console.log(prizeDoor)
    doors[prizeDoor - 1] = 0
    $text.textContent = 'Choose the door'
    $again.setAttribute('disabled', '')
}

$doors.addEventListener('click', (event) => {
    if ((event.target == $door1 || event.target == $door2 || event.target == $door3) && !finished) {
        if (doors.length == 3) {
            event.target.style.color = 'red'
            chosen = event.target.id[4] - 1

            if (doors[chosen] == 0) {
                doors.splice(chosen, 1)
                opened = doors[Math.floor(Math.random() * 2)]
            }
            else {
                doors[chosen] = 0
                doors = doors.filter(i => i != 0)
                opened = doors[0]
            }

            open(document.querySelector('#door' + opened))
            $text.textContent = 'Now you can change your choice'
        }
        else if (event.target.id[4] != opened) {
            open(event.target)
            let changed = 'changed'
            let win = 'win'
            $text.textContent = 'You won!'

            if (event.target.id[4] == chosen + 1) {
                changed = 'unchanged'
            }
            if (event.target.id[4] != prizeDoor) {
                win = 'lose'
                $text.textContent = 'You lost!'
            }

            $again.removeAttribute('disabled')
            finished = true

            document.querySelector(`#${changed} .${win}`).textContent++
        }


    }
})

$again.addEventListener('click', () => {
    for (let i = 1; i <= 3; ++i) {
        document.querySelector('#door' + i).textContent = '?'
        document.querySelector('#door' + i).classList.remove('opened')
        document.querySelector('#door' + i).removeAttribute('style')
    }
    startGame()
})

startGame()