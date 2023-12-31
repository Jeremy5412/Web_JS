document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const p = document.querySelector('p')
    const isMail = (value) => {
        return (value.indexOf('@' > 1) &&
        (value.split('@')[1].indexOf('.') > 1))
    }

    input.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value
        if (isMail(value)) {
            p.style.color = 'green'
            p.textContent = 'vaild text : ' + value
        } else {
            p.style.color = 'red'
            p.textContent = 'invaild text : ' + value
        }
    })

    let [timer, timerId] = [0, 0]
    const h1 = document.querySelector('h1')
    const checkbox = document.querySelector('input')

    checkbox.addEventListener('change', (event) => {
        if(event.currentTarget.checked) {
            timerId = setInterval(() => {
                timer += 1
                h1.textContent = timer + 'sec'
            },1000)
        } else {
            clearInterval(timerId)
        }
    })
})