// set up the canvas and draw the prisoner
var canvas = document.querySelector('canvas');

canvas.width = 500;
canvas.height = 800;

const c = canvas.getContext('2d');

const name = 'Prisoner';
console.log(name);

drawGallow();

function drawGallow() {
  // Set fill color for all wooden parts
  c.fillStyle = "#725C3A";

  // Base
  c.fillRect(50, 700, 400, 100);

  // Pole
  c.fillRect(50, 100, 50, 600);

  // Overhang
  c.fillRect(50, 100, 300, 50);

  // Overhang support
  c.strokeStyle = "#725C3A"; // This affects the line
  c.lineWidth = 15;
  c.beginPath();
  c.moveTo(100, 255);
  c.lineTo(200, 150);
  c.stroke();
}

function drawHead() {
  c.fillStyle = "#FFFFFF";
  c.strokeStyle = "#000000";
  c.lineWidth = 1;

  // head
  c.beginPath();
  c.arc(250, 300, 30, 0, Math.PI * 2, false);
  c.fill();
  c.stroke();

  //rope
  c.strokeStyle = "#584738";
  c.lineWidth = 5;
  c.beginPath();
  c.moveTo(250, 270);
  c.lineTo(250, 100);
  c.stroke();

  c.beginPath();
  c.moveTo(250, 330);
  c.lineTo(250, 340);
  c.stroke();
}

function drawTorso() {
  // torso
  c.strokeStyle = "#000000";
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(250, 330);
  c.lineTo(250, 500);
  c.stroke();
}

function drawLeftLeg() {
  // left leg
  c.strokeStyle = "#000000";
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(250, 500);
  c.lineTo(200, 600);
  c.stroke();
}

function drawRightLeg() {
  // right leg
  c.strokeStyle = "#000000";
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(250, 500);
  c.lineTo(300, 600);
  c.stroke();
}

function drawRightArm() {
  // right arm
  c.strokeStyle = "#000000";
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(250, 350);
  c.lineTo(300, 425);
  c.stroke();

}

function drawLeftArm() {
  // left arm
  c.strokeStyle = "#000000";
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(250, 350);
  c.lineTo(200, 425);
  c.stroke();
}


// typing part of the game

const arrayQuote =
  [ // 16 quotes (Some are harder and longer on purpose)
    "I could believe in hell, but it was impossible for me to believe in the existence of heaven. ('No Longer Human' Osamu Dazai)",

    "We sometimes encounter people, even perfect strangers, who begin to interest us at first sight, somehow suddenly, all at once, before a word has been spoken ('Crime and Punishment' Fyodor Dostoevsky)",

    "To go wrong in one's own way is better than to go right in someone else's. ('Crime and Punishment' Fyodor Dostoevsky)",

    "Some had said that they could not write because of military censorship, but the fact was that, war or no war, they had not the slightest idea how to write honestly on any subject. Truth or real feeling in writing had nothing to do with censorship. In whatever period these gentry had happened to live, their personalities would have been bound to display the same emptiness. They changed in accordance with the prevailing fashion and took for their models expression culled from popular novels of the day. ('Sakaguchi Ango)",

    "You can easily imagine what a father such a man could be and how he would bring up his children. His behavior as a father was exactly what might be expected. He completely abandoned the child of his marriage with Adelaida Ivanovna, not from malice, nor because of his matrimonial grievances, but simply because he forgot him. While he was wearying every one with his tears and complaints, and turning his house into a sink of debauchery, a faithful servant of the family, Grigory, took the three‐year‐old Mitya into his care. If he hadn't looked after him there would have been no one even to change the baby's little shirt. ('The Brothers Karamazov' Fyodor Dostoyevsky)",

    "A man sometimes devotes his life to a desire which he is not sure will ever be fulfilled. Those who laugh at this folly are, after all, no more than mere spectators of life. ('Rashomon and Other Stories' Ryunosuke Akutagawa)",

    "For someone like myself in whom the ability to trust others is so cracked and broken that I am wretchedly timid and am forever trying to read the expression on people's faces. ('No Longer Human' Osamu Dazai)",

    "I don't have the strength to keep writing this. To go on living with this feeling is painful beyond description. Isn't there someone kind enough to strangle me in my sleep? ('No Longer Human' Osamu Dazai)",

    "I thought, “I want to die. I want to die more than ever before. There’s no chance now of a recovery. No matter what sort of thing I do, no matter what I do, it’s sure to be a failure, just a final coating applied to my shame. That dream of going on bicycles to see a waterfall framed in summer leaves—it was not for the likes of me. All that can happen now is that one foul, humiliating sin will be piled on another, and my sufferings will become only the more acute. I want to die. I must die. Living itself is the source of sin. ('No Longer Human' Osamu Dazai)",

    "This I want to believe implicitly: Man was born for love and revolution. ('The Setting Sun' Osamu Dazai)",

    "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you. (Friedrich Nietzsche)",

    "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth. ('Crime and Punishment' Fyodor Dostoevsky)",

    "I am afraid because I can so clearly foresee my own life rotting away of itself, like a leaf that rots without falling, while I pursue my round of existence from day to day. ('The Setting Sun' Osamu Dazai)",

    "I found myself wondering why I had once been a human being...How can others understand what I feel? They cannot--unless they have experienced the very same thing. ('The Moon Over The Mountain' Atsushi Nakajima)",

    "Not all the leaves have fallen yet. When I look at the distant mountains, my heart is filled with yearning and longs to vanish into them. ('River Mist and Other Stories' Doppo Kunikida)",

    "As long as I can make them laugh, it doesn’t matter how, I’ll be alright. If I succeed in that, the human beings probably won’t mind it too much if I remain outside their lives. The one thing I must avoid is becoming offensive in their eyes: I shall be nothing, the wind, the sky. ('No Longer Human' Osamu Dazai)",

  ]

const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

let intervalID = 0
let randomNumber = 0
let mistakes = 0
let currentTime = 0
let input = ""
let place = 0

// added some music (loseSound will continue to play after one mistake for added pressure)
let hangmanSound = new Audio("../img/cracking_sound.mp3");
let winSound = new Audio("../img/win.mp3");
let loseSound = new Audio("../img/lose.mp3");

// instruction modal for the game when the window first loads
window.onload = function () {
  document.getElementById("instruction-modal").style.display = "block"
  clearInterval(intervalID)

};

// event listener waits for an event to occur then responds to it
quoteInputElement.addEventListener('input', () => {
  let quote = arrayQuote[randomNumber]
  let augment = document.getElementById("quoteInput").value //augment is user input
  let lastAugmentChar = augment[augment.length - 1]
  let compareChar = quote[augment.length - 1]

  input = augment

  if (lastAugmentChar == compareChar) {
    let html = document.getElementById("quoteDisplay").innerHTML

    // changes the color to green if correct by creating a span over each character 
    document.getElementById("quoteDisplay").innerHTML = html.substring(0, place) + "<span id='correct'>" + compareChar + "</span>" + html.substring(place + 1, html.length)

    place = (html.substring(0, place) + "<span id='correct'>" + compareChar + "</span>").length

  } else {
    mistakes++
    let html = document.getElementById("quoteDisplay").innerHTML

    // changes the color to red if incorrect by creating a span over each character 
    document.getElementById("quoteDisplay").innerHTML = html.substring(0, place) + "<span id='incorrect'>" + compareChar + "</span>" + html.substring(place + 1, html.length)

    place = (html.substring(0, place) + "<span id='incorrect'>" + compareChar + "</span>").length

  }

  // mistakes draw each body part of the prisoner
  if (mistakes == 1) {
    let hangmanSound = new Audio("../img/cracking_sound.mp3");
    hangmanSound.play()
    drawHead();
  } else if (mistakes == 2) {
    let hangmanSound = new Audio("../img/cracking_sound.mp3");
    hangmanSound.play()
    drawTorso()
  } else if (mistakes == 3) {
    let hangmanSound = new Audio("../img/cracking_sound.mp3");
    hangmanSound.play()
    drawLeftArm()
  } else if (mistakes == 4) {
    let hangmanSound = new Audio("../img/cracking_sound.mp3");
    hangmanSound.play()
    drawRightArm()
  } else if (mistakes == 5) {
    let hangmanSound = new Audio("../img/cracking_sound.mp3");
    hangmanSound.play()
    drawLeftLeg()
  } else if (mistakes == 6) {
    let hangmanSound = new Audio("../img/cracking_sound.mp3");
    hangmanSound.play()
    drawRightLeg()
    // calls the game result function when the user loses
    let loseSound = new Audio("../img/lose.mp3");
    loseSound.play()
    losingResults(quote)
    clearInterval(intervalID)

  }


  if (quote.length == augment.length) {

    let gameresult = document.getElementById("game-result")
    let wpm = document.getElementById("wpm")
    let accuracy = document.getElementById("accuracy")
    let time = document.getElementById("time")
    let error = document.getElementById("error")

    // game result when the user wins
    let winSound = new Audio("../img/win.mp3");
    winSound.play()
    gameresult.innerText = "W's in the chat"
    wpm.innerText = "Wpm: " + Math.floor((60 / currentTime) * getWordCount(quote))
    accuracy.innerText = "Accuracy: " + ((quote.length - mistakes) / quote.length * 100).toFixed(2) + "%"
    time.innerText = "Time: " + currentTime
    error.innerText = "Mistakes: " + mistakes
    clearInterval(intervalID)

    document.getElementById("result-modal").style.display = "block"

  }
})

// game result function when the user loses
function losingResults(quote) {
  let gameresult = document.getElementById("game-result")
  let wpm = document.getElementById("wpm")
  let accuracy = document.getElementById("accuracy")
  let time = document.getElementById("time")
  let error = document.getElementById("error")
  gameresult.innerText = "L's in the chat"

  // conditional set incase the user doesn't type anything and when they do (but also lose)
  if (input.length == 0) {
    wpm.innerText = "Wpm: 0"
    accuracy.innerText = "Accuracy: 0%"
  } else {
    wpm.innerText = "Wpm: " + Math.floor((60 / currentTime) * getWordCount(input))
    accuracy.innerText = "Accuracy: " + ((input.length - mistakes) / input.length * 100).toFixed(2) + "%"
  }
  if (currentTime == 30) {
    time.innerText = "Time: ran out :("
  } else {
    time.innerText = "Time: " + currentTime
  }

  error.innerText = "Mistakes: " + mistakes

  document.getElementById("result-modal").style.display = "block"
}


// used for calculating word count via spaces
function getWordCount(quote) {
  let spaceCount = 1
  for (let i = 0; i < quote.length; i++) {
    if (quote[i] === ' ') {
      spaceCount++;
    }
  }
  return spaceCount
}

// initially for the retry but also used as start
function restart() {
  // reset everything 
  intervalID = 0
  randomNumber = 0
  mistakes = 0
  currentTime = 0
  input = ""
  place = 0
  c.reset()
  drawGallow();
  document.getElementById("quoteInput").value = ""
  renderNewQuote()
  document.getElementById("result-modal").style.display = "none"
  document.getElementById("instruction-modal").style.display = "none"

}

// function I found in stackoverflow on how to prevent backspaces
function preventBackspace(e) {
  var evt = e || window.event;
  if (evt) {
    var keyCode = evt.charCode || evt.keyCode;
    if (keyCode === 8) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  }
}

// calls the function to render different quotes
renderNewQuote();

// instead of using an API, got a few quotes and stored it in arrayQuote and renders a random quote 
function renderNewQuote() {
  randomNumber = Math.floor(Math.random() * (arrayQuote.length))
  let quote = arrayQuote[randomNumber]

  document.getElementById("quoteDisplay").innerHTML = quote

  startTimer()
}

// timer function I got from a youtube tutorial 
function startTimer() {
  timerElement.innerText = 0
  let startTime = new Date()

  intervalID = setInterval(() => {
    currentTime++
    timer.innerText = getTimerTime(startTime)
    if (timer.innerText == "30") {
      let loseSound = new Audio("../img/lose.mp3");
      loseSound.play()
      losingResults(arrayQuote[randomNumber])
      clearInterval(intervalID)
    }
  }, 1000)
}

function getTimerTime(startTime) {

  return Math.floor((new Date() - startTime) / 1000)
}