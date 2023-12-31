let com_num = Math.floor(Math.random()*(99-1+1)) + 1;
const btn_go = document.querySelector('.go_btn');
const btn_reset = document.querySelector('.reset_btn');

let count = 0;

btn_go.addEventListener('click', () => {
    count += 1;
    let player_num = document.getElementById('n').value;
    player_num = Number(player_num);
    document.getElementById('n').value = '';

    if (player_num <= 0 || player_num >= 100) {
        document.getElementById('notice').innerHTML = '잘못 입력하셨습니다.';
    }
    else {
        document.getElementById('notice').innerHTML = `입력하신 숫자는 ${player_num}입니다.`;

        if (com_num > player_num) {
            document.getElementById('result').innerHTML = 'UP';
        }
        else if (com_num < player_num) {
            document.getElementById('result').innerHTML = 'DOWN';
        }
        else if (com_num == player_num) {
            document.getElementById('result').innerHTML = 'SUCCESS!';
            document.getElementById('notice').innerHTML = `${count}만에 성공!!`;
        }
    }
})

btn_reset.addEventListener('click', () => {
    count = 0;
    com_num = Math.floor(Math.random()*(99-1+1)) + 1;
    document.getElementById('result').innerHTML = '';
    document.getElementById('n').value = '';
    document.getElementById('notice').innerHTML = 
    '1 에서 99 사이의 숫자를 입력해 주세요.';
})