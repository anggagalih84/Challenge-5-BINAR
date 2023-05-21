// Semakin lama, semakin sulit ya bund.:') ' bagi awam seperti saya, mempelajari hal baru web programing di bootcamp ini, menjadikan suatu tantangan baru. kuncinya paham, sabar ngadepin stress nya, karena code2 yang kadang gak jalan. sampai lihat bolak balik kelas onlinenya. bahkan harus  mencari refrensi lain juga. tapi sejauh ini, kendala di awal hanya saat mengimplementasikan hasil dari console ke layar web. setelah dikasi masukan sama mas ayat, Puji Tuhan setelah itu lancar. trimakasih mas, mungkin masih ada beberapa yg kurang sempurna. terumata pada bagian code yg diharuskan menghindari pengulangan. yg bagian ini, saya rada2 bingung mas. soalnya, kalo saya kayanya harus ngerjain dari awal. dan ga keburu sama deadline. hehehe. skali lagi trimakasih mas ayat, tutor dan batuannya. salam -Galih  //

//javascript//

function getComChoose() {
    const com = Math.random();
    if (com < 0.34) return 'rock';
    if (com >= 0.34 && com < 0.67) return 'paper';
    return 'scissors';
}

function getValue(com, player) {
    if (player == com) return 'DRAW'
    if (player == 'rock') return (com == 'paper') ? 'COM WIN' : 'PLAYER 1 WIN';
    if (player == 'paper') return (com == 'rock') ? 'PLAYER 1 WIN' : 'COM WIN';
    if (player == 'scissors') return (com == 'rock') ? 'COM WIN' : 'PLAYER 1 WIN';
}


//PLAYER 1 - ROCK//
const playerRock = document.getElementById('rock-player');
playerRock.addEventListener('click', function() {

    //disabled
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;

    //value
    const comChoose = getComChoose();
    const playerChoose = playerRock.className;
    const value = getValue(comChoose, playerChoose);

    //com choose value
    document.querySelector(`.${comChoose}-com`).classList.add('active');

    //background value
    const info = document.querySelector('.info')
    info.innerHTML = value;
    if (value === 'PLAYER 1 WIN ,  COM WIN') return
    info.style.backgroundColor = 'rgba(3, 91, 12, 1)'
    if (value === 'DRAW') return
    info.style.backgroundColor = 'rgba(76, 150, 84, 1)'

});

//PLAYER 1 - PAPER//
const playerPaper = document.getElementById('paper-player');
playerPaper.addEventListener('click', function() {

    //disabled
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;

    //value
    const comChoose = getComChoose();
    const playerChoose = playerPaper.className;
    const value = getValue(comChoose, playerChoose);

    //com choose
    document.querySelector(`.${comChoose}-com`).classList.add('active');

    //background value
    const info = document.querySelector('.info')
    info.innerHTML = value;
    if (value === 'PLAYER 1 WIN ,  COM WIN') return
    info.style.backgroundColor = 'rgba(3, 91, 12, 1)'
    if (value === 'DRAW') return
    info.style.backgroundColor = 'rgba(76, 150, 84, 1)'


});


//PLAYER 1 - SCISSORS//
const playerScissors = document.getElementById('scissors-player');
playerScissors.addEventListener('click', function() {

    //disabled
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;

    //value
    const comChoose = getComChoose();
    const playerChoose = playerScissors.className;
    const value = getValue(comChoose, playerChoose);

    //com choose
    document.querySelector(`.${comChoose}-com`).classList.add('active');

    //background value
    const info = document.querySelector('.info')
    info.innerHTML = value;
    if (value === 'PLAYER 1 WIN ,  COM WIN') return
    info.style.backgroundColor = 'rgba(3, 91, 12, 1)'
    if (value === 'DRAW') return
    info.style.backgroundColor = 'rgba(76, 150, 84, 1)'

});