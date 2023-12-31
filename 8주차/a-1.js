/*
document.addEventListener('DOMContentLoaded', ()=> {
    const textarea = document.querySelector('textarea')
    const h1 = document.querySelector('h1')

    textarea.addEventListener('keyup', (event) => {
        const length = textarea.value.length
        h1.textContent = '글자 수: ' + length
        //h1.textContent = `글자 수: $length`
    })
})
*/

document.addEventListener('DOMContentLoaded', ()=> {
    const rgbtq = document.querySelector('h1')
    rgbtq.style.position = 'absolute' //style 속성 주작, position 값 설정

    //객체 이동
    let[x,y] = [0,0]
    const block = 20
    const print = () => {
        rgbtq.style.left = `${x+block}px`
        rgbtq.style.top = `${y+block}px`
    }
    print()

    const [left, up, right, down] = [37, 38, 39, 40]
    document.body.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            case left:
                x -= 1
                break
            case up:
                y -= 1
                break
            case right:
                x += 1
                break
            case down:
                y += 1
                break
        }
        print()
    })
})