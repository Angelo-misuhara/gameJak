let toggle_dark = document.querySelector('#toggle_checkbox');
let isDark = true;
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar-brand");
let label = document.querySelector('label');
let containerMain=document.querySelector('#container-main');

toggle_dark.addEventListener('click', function () {
  
  if (isDark === true) {
    body.style.backgroundColor = 'black';
    navbar.style.color = 'white';
    body.style.transition = '2s'
    label.style.borderColor = 'white'
    containerMain.style.backgroundColor = 'white'
    isDark = false;
  } else {
    body.style.backgroundColor = 'white';
    navbar.style.color = 'black';
    body.style.transition = '2s'
    label.style.borderColor = 'black'
    isDark = true;
  }
});
// jak in poy//

let humanPng = document.querySelector('.human-Png');
let aiPng = document.querySelector('.robot-Png');
let result = document.querySelector('.result');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let rock = document.querySelector('#rock');
let redo = document.querySelector('#redo');
let modal = document.querySelector('#modal');
let resultimg = document.querySelector('.resultimg');


let arrayMoves = ['palm', 'rock', 'scissorts'];


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




scissors.addEventListener('click', function () {
  
  let random = Math.floor(Math.random() * arrayMoves.length);

  humanPng.src = 'img/scissorts.png';
  
  let ai = arrayMoves[random] === 'palm' ? 'img/palm.png' : arrayMoves[random] === 'rock' ? 'img/rock.png' : 'img/scissorts.png';
  aiPng.src = ai;

  console.log(arrayMoves[random]);
  console.log(arrayMoves[random]);
  console.log(arrayMoves[random]);
  if (arrayMoves[random] === 'palm') {
    sleep(2000).then(() => {
      result.innerText = 'You win';
      resultimg.src='img/happy.png'
    });
    

  } else if (arrayMoves[random] === 'scissorts') {
    sleep(2000).then(() => {
      result.innerText = 'Tie';
      resultimg.src='img/tei.png'

    });
  } else {
    sleep(2000).then(() => {
      result.innerText = 'You lose'
      resultimg.src='img/defeat.png'
    });
  }
  result.innerText = '';
      resultimg.src='img/loading.png'
});

//////////////////////////////////////

rock.addEventListener('click', function () {

  let random = Math.floor(Math.random() * arrayMoves.length);
  humanPng.src = 'img/rock.png';
  let ai = arrayMoves[random] === 'palm' ? 'img/palm.png' : arrayMoves[random] === 'rock' ? 'img/rock.png' : 'img/scissorts.png';
  aiPng.src = ai;
  
  console.log(arrayMoves[random]);
  console.log(arrayMoves[random]);
  console.log(arrayMoves[random]);
  if (arrayMoves[random] === 'palm') {
  sleep(2000).then(() => {
      result.innerText = 'You lose'
      resultimg.src='img/defeat.png'
    });

  } else if (arrayMoves[random]==='scissorts') {
  sleep(2000).then(() => {
      result.innerText = 'You win';
      resultimg.src='img/happy.png'
    });
    
  } else {
    sleep(2000).then(() => {
      result.innerText = 'Tie';
      resultimg.src='img/tei.png'
    });
  }
      result.innerText = '';
      resultimg.src='img/loading.png'
});

//////////////////////////////////////////////////////
paper.addEventListener('click', function () {

  let random = Math.floor(Math.random() * arrayMoves.length);
  humanPng.src = 'img/palm.png';
  let ai = arrayMoves[random] === 'palm' ? 'img/palm.png' : arrayMoves[random] === 'rock' ? 'img/rock.png' : 'img/scissorts.png';
  aiPng.src = ai;
  
  console.log(arrayMoves[random]);
  console.log(arrayMoves[random]);
  console.log(arrayMoves[random]);
  if (arrayMoves[random] === 'palm') {
  sleep(2000).then(() => {
      result.innerText = 'Tie'
      resultimg.src='img/tei.png'
    });

  } else if (arrayMoves[random]==='scissorts') {
  sleep(2000).then(() => {
      result.innerText = 'You lose';
      resultimg.src='img/defeat.png'
    });
    
  } else {
    sleep(2000).then(() => {
      result.innerText = 'You win';
      resultimg.src='img/happy.png'
    });
  }
      result.innerText = '';
      resultimg.src='img/loading.png'
});

redo.addEventListener('click', function () {
    sleep(500).then(() => {
  humanPng.src = 'img/human.png';
  aiPng.src = 'img/robot.png'
  });
});