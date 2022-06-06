const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvens = document.querySelector('.nuvens');
const nuvens2 = document.querySelector('.nuvens2');

const pulo = () => {
    mario.classList.add('pulo');

   setTimeout(() => {
    mario.classList.remove('pulo');
   }, 500);
}




const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';



        nuvens.style.animation = 'none';
        nuvens2.style.animation = 'none';
        nuvens2.src = '/imagens/instagram.png';
        nuvens2.style.width = '150px';
        nuvens.src = '/imagens/game_over_PNG58.png';
        nuvens.style.width = '500px';
        nuvens.style.bottom = '300px';
        nuvens.style.marginLeft = '300px';


        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', pulo);

