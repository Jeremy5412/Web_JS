document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector('p')
    const input = document.querySelector('input')
    const button = document.querySelector('button')

    const savedValue = localStorage.getItem('input')

    if (savedValue) {
        input.value = savedValue
        p.textContent = '인전 실행 때의 마지막 값 : ' + savedValue
    }

    input.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value
        localStorage.setItem('input', value)
    })

    button.addEventListener('click', (event) => {
        localStorage.clear()
        input.value = ''
    })
})