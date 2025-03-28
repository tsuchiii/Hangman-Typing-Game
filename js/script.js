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
  [ // 8 quotes (Some are harder and longer on purpose)
    "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves. (Lao Tzu)",

    "Beloved Pan, and all ye other gods who haunt this place, give me beauty in the inward soul; and may the outward and inward be at one. (Socrates)",

    "When I examine myself and my methods of thought, I come to the conclusion that the gift of fantasy has meant more to me than my talent for absorbing positive knowledge. (Albert Einstein)",

    "There was something mysterious in the air that morning. Nothing was done in its regular order and several of the native servants seemed missing, while those whom Mary saw slunk or hurried about with ashy and scared faces. But no one would tell her anything and her Ayah did not come. She was actually left alone as the morning went on, and at last she wandered out into the garden and began to play by herself under a tree near the veranda. She pretended that she was making a flower-bed, and she stuck big scarlet hibiscus blossoms into little heaps of earth, all the time growing more and more angry and muttering to herself the things she would say and the names she would call Saidie when she returned. ('The Secret Garden' by Frances Hodgson Burnett)",

    "You can easily imagine what a father such a man could be and how he would bring up his children. His behavior as a father was exactly what might be expected. He completely abandoned the child of his marriage with Adelaida Ivanovna, not from malice, nor because of his matrimonial grievances, but simply because he forgot him. While he was wearying every one with his tears and complaints, and turning his house into a sink of debauchery, a faithful servant of the family, Grigory, took the three‐year‐old Mitya into his care. If he hadn't looked after him there would have been no one even to change the baby's little shirt. ('The Brothers Karamazov' by Fyodor Dostoyevsky)",

    "Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge Miller's place, it was called. It stood back from the road, half hidden among the trees, through which glimpses could be caught of the wide cool veranda that ran around its four sides. The house was approached by gravelled driveways which wound about through wide-spreading lawns and under the interlacing boughs of tall poplars. At the rear things were on even a more spacious scale than at the front. There were great stables, where a dozen grooms and boys held forth, rows of vine-clad servants' cottages, an endless and orderly array of outhouses, long grape arbors, green pastures, orchards, and berry patches. Then there was the pumping plant for the artesian well, and the big cement tank where Judge Miller's boys took their morning plunge and kept cool in the hot afternoon. ('The Call of the Wild' by Jack London)",

    "Tell me, O Muse, of that ingenious hero who travelled far and wide after he had sacked the famous town of Troy. Many cities did he visit, and many were the nations with whose manners and customs he was acquainted; moreover he suffered much by sea while trying to save his own life and bring his men safely home; but do what he might he could not save his men, for they perished through their own sheer folly in eating the cattle of the Sun-god Hyperion; so the god prevented them from ever reaching home. Tell me, too, about all these things, oh daughter of Jove, from whatsoever source you may know them. ('The Odyssey' by Homer)",

    "Margaret, the eldest of the four, was sixteen, and very pretty, being plump and fair, with large eyes, plenty of soft brown hair, a sweet mouth, and white hands, of which she was rather vain. Fifteen-year-old Jo was very tall, thin, and brown, and reminded one of a colt, for she never seemed to know what to do with her long limbs, which were very much in her way. She had a decided mouth, a comical nose, and sharp, gray eyes, which appeared to see everything, and were by turns fierce, funny, or thoughtful. Her long, thick hair was her one beauty, but it was usually bundled into a net, to be out of her way. Round shoulders had Jo, big hands and feet, a flyaway look to her clothes, and the uncomfortable appearance of a girl who was rapidly shooting up into a woman and didn't like it. Elizabeth, or Beth, as everyone called her, was a rosy, smooth-haired, bright-eyed girl of thirteen, with a shy manner, a timid voice, and a peaceful expression which was seldom disturbed. Her father called her 'Little Miss Tranquility', and the name suited her excellently, for she seemed to live in a happy world of her own, only venturing out to meet the few whom she trusted and loved. Amy, though the youngest, was a most important person, in her own opinion at least. ('Little Women' by Louisa May Alcott)",

    "short for testing ahaha"
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

  // mistakes draw each bpdy part of the prisoner
  if (mistakes == 1) {
    drawHead();
  } else if (mistakes == 2) {
    drawTorso()
  } else if (mistakes == 3) {
    drawLeftArm()
  } else if (mistakes == 4) {
    drawRightArm()
  } else if (mistakes == 5) {
    drawLeftLeg()
  } else if (mistakes == 6) {
    drawRightLeg()
    // calls the game result function when the user loses
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
      losingResults(arrayQuote[randomNumber])
      clearInterval(intervalID)
    }
  }, 1000)
}

function getTimerTime(startTime) {

  return Math.floor((new Date() - startTime) / 1000)
}