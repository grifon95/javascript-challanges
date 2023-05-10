// Challange 1
function ageInDays() {
  const birthYear = Number(prompt("Whats your birth year"));

  const age = 2023 - birthYear;
  const ageInDays = age * 365;
  const h1 = document.createElement("h1");
  h1.textContent = `You are ${ageInDays} days old`;
  h1.setAttribute("id", "ageInDays");
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challange 2
function generateCat() {
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  );
  document.querySelector(".flex-box-container-2").appendChild(image);
}

// Challenge 3
const rockEl = document.querySelector(".rock");
const paperEl = document.querySelector(".paper");
const scissorsEl = document.querySelector(".scissors");

function rpsGame(yourChoice) {
  console.log(yourChoice);
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  let randomNumber = Math.trunc(Math.random() * 3) + 1;
  let botChoicePic;
  if (randomNumber === 1) {
    botChoicePic = document.querySelector(".rock").src;
  } else if (randomNumber === 2) {
    botChoicePic = document.querySelector(".paper").src;
    console.log(botChoicePic);
  } else if (randomNumber === 3) {
    botChoicePic = document.querySelector(".scissors").src;
    console.log(botChoicePic);
  }

  if (randomNumber === 1) {
    botChoice = "rock";
  } else if (randomNumber === 2) {
    botChoice = "paper";
  } else {
    botChoice = "scissors";
  }
  function decideWinner(humanChoice, botChoice) {
    // da li je humanchoice jaci od botchoice
    // papir pobedjuje kamen, kamen pobedjuje makaze, makaze pobedjuju papir
    if (humanChoice === "rock" && botChoice === "paper") {
      return "You lost";
    } else if (humanChoice === "rock" && botChoice === "scissors") {
      return "You won";
    } else if (humanChoice === "rock" && botChoice === "rock") {
      return "You tied"; // Rock end
    } else if (humanChoice === "paper" && botChoice === "rock") {
      return "You won";
    } else if (humanChoice === "paper" && botChoice === "paper") {
      return "You tied";
    } else if (humanChoice === "paper" && botChoice === "scissors") {
      return "You lost"; // Paper end
    } else if (humanChoice === "scissors" && botChoice === "rock") {
      return "You lost";
    } else if (humanChoice === "scissors" && botChoice === "paper") {
      return "You won";
    } else if (humanChoice === "scissors" && botChoice === "scissors") {
      return "You tied";
    }
  }
  const results1 = decideWinner(humanChoice, botChoice);

  let message = function displayMessage(results) {
    if (results1 === "You won") {
      document.querySelector(".flex-box-rps").innerHTML = "";
      const humanChoicePic = document.createElement("img"); // HUMAN
      humanChoicePic.setAttribute("src", `${yourChoice.src}`);
      document.querySelector(".flex-box-rps").appendChild(humanChoicePic);
      humanChoicePic.style.boxShadow = "0px 10px 50px rgba(37, 50, 233, 1)";
      document.querySelector(".flex-box-rps").innerHTML +=
        "<p style ='color:green; font-size:50px'; >You won!</style>"; // poruka
      /* const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      document.querySelector(".flex-box-rps").appendChild(resetBtn);
      resetBtn.addEventListener("click", resetAll); */
      const botChoicePicImg = document.createElement("img"); //BOT
      botChoicePicImg.setAttribute("src", `${botChoicePic}`);
      document.querySelector(".flex-box-rps").appendChild(botChoicePicImg);
      botChoicePicImg.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.7)";
    } else if (results1 === "You lost") {
      document.querySelector(".flex-box-rps").innerHTML = "";
      const humanChoicePic = document.createElement("img");
      humanChoicePic.setAttribute("src", `${yourChoice.src}`);
      document.querySelector(".flex-box-rps").appendChild(humanChoicePic);
      humanChoicePic.style.boxShadow = "0px 10px 50px rgba(37, 50, 233, 1)";
      document.querySelector(".flex-box-rps").innerHTML +=
        "<p style ='color:red;font-size:50px'>You lost!</style>"; // poruka
      /* const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      document.querySelector(".flex-box-rps").appendChild(resetBtn);
      resetBtn.addEventListener("click", resetAll); */
      const botChoicePicImg = document.createElement("img"); //BOT
      botChoicePicImg.setAttribute("src", `${botChoicePic}`);
      document.querySelector(".flex-box-rps").appendChild(botChoicePicImg);
      botChoicePicImg.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.7)";
    } else if (results1 === "You tied") {
      document.querySelector(".flex-box-rps").innerHTML = "";
      const humanChoicePic = document.createElement("img");
      humanChoicePic.setAttribute("src", `${yourChoice.src}`);
      document.querySelector(".flex-box-rps").appendChild(humanChoicePic);
      humanChoicePic.style.boxShadow = "0px 10px 50px rgba(37, 50, 233, 1)";
      document.querySelector(".flex-box-rps").innerHTML +=
        "<p style ='color:purple;font-size:50px'>Its tie!</style>"; // poruka
      /*  const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      document.querySelector(".flex-box-rps").appendChild(resetBtn);
      resetBtn.addEventListener("click", resetAll); */
      const botChoicePicImg = document.createElement("img"); //BOT
      botChoicePicImg.setAttribute("src", `${botChoicePic}`);
      document.querySelector(".flex-box-rps").appendChild(botChoicePicImg);
      botChoicePicImg.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.7)";
    } else {
      console.log("its not working");
    }
  };
  message(results1);

  function resetAll() {
    document.querySelector(".flex-box-rps").innerHTML = "";
    document.querySelector(".flex-box-rps").appendChild(rockEl);
    document.querySelector(".flex-box-rps").appendChild(paperEl);
    document.querySelector(".flex-box-rps").appendChild(scissorsEl);
  }
}

// Challange 4
const allButtons = document.getElementsByTagName("button");
let copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(yourChoice) {
  if (yourChoice.value === "red") {
    buttonsRed();
  } else if (yourChoice.value === "green") {
    buttonsGreen();
  } else if (yourChoice.value === "blue") {
    buttonsBlue();
  } else if (yourChoice.value === "reset") {
    buttonColorReset();
  } else if (yourChoice.value === "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
}

function buttonsBlue() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-primary");
  }
}

function buttonColorReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  const choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
  // let randomNum = Math.trunc(Math.random() * choices.length);
  // if (randomNum === 0) {
  //   for (let i = 0; i < allButtons.length; i++) {
  //     allButtons[i].classList.remove(allButtons[i].classList[1]);
  //     allButtons[i].classList.add(copyAllButtons[0]);
  //   }
  // } else if (randomNum === 1) {
  //   for (let i = 0; i < allButtons.length; i++) {
  //     allButtons[i].classList.remove(allButtons[i].classList[1]);
  //     allButtons[i].classList.add(copyAllButtons[1]);
  //   }
  // } else if (randomNum === 2) {
  //   for (let i = 0; i < allButtons.length; i++) {
  //     allButtons[i].classList.remove(allButtons[i].classList[1]);
  //     allButtons[i].classList.add(copyAllButtons[2]);
  //   }
  // } else if (randomNum === 3) {
  //   for (let i = 0; i < allButtons.length; i++) {
  //     allButtons[i].classList.remove(allButtons[i].classList[1]);
  //     allButtons[i].classList.add(copyAllButtons[3]);
  //   }
  // }
  for (let i = 0; i < allButtons.length; i++) {
    let randomNum = Math.trunc(Math.random() * choices.length);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNum]);
  }
}

// Challange 5: Blackjack
const btnHit = document.querySelector(".hit");
const btnDeal = document.querySelector(".deal");
const btnStand = document.querySelector(".stand");

const divPlayerCards = document.querySelector(".blackjack-player-div-cards");
const divDealerCards = document.querySelector(".blackjack-dealer-div-cards");

const scorePlayerEl = document.querySelector(".score-player");
const scoreDealerEl = document.querySelector(".score-dealer");
const winsPlayerEl = document.querySelector(".wins-player");
const lossesPlayerEl = document.querySelector(".losses-player");
const drawsPlayerEl = document.querySelector(".draws-player");
const sound1 = new Audio(`sound/sound1.mp3`);
const sound2 = new Audio(`sound/sound2.mp3`);
const sound3 = new Audio(`sound/sound3.mp3`);

let score = {
  wins: 0,
  draws: 0,
  losses: 0,
};
let scorePlayer = 0;
let scoreDealer = 0;
let isPlaying = true;
let isHitAlive = true;
let cardsPulled = [];
btnHit.addEventListener("click", function () {
  if (isHitAlive) {
    playingGame();
  }
});

btnDeal.addEventListener("click", function () {
  cardsPulled.length = 0;
  divPlayerCards.innerHTML = "";
  scorePlayer = 0;
  scorePlayerEl.innerHTML = 0;
  cardsPulledBot.length = 0;
  divDealerCards.innerHTML = "";
  scoreDealer = 0;
  scoreDealerEl.innerHTML = 0;
  isPlaying = true;
  isHitAlive = true;
  playingGame();
});

function playingGame() {
  if (isPlaying) {
    let randomNum = Math.floor(Math.random() * 13) + 2;
    const card = document.createElement("img");
    card.setAttribute("src", `img/cards/${randomNum}.png`);
    divPlayerCards.appendChild(card);
    cardsPulled.push(randomNum);
    sound1.play();

    if (randomNum > 11) {
      randomNum = 10;
    }

    if (cardsPulled[0] === 11 && cardsPulled[1] === 11) {
      blackJackWin();
    }

    if (randomNum === 11 && scorePlayer === 20) {
      randomNum = 1;
    }
    if (randomNum === 11 && scorePlayer > 11) {
      randomNum = 1;
    }
    if (randomNum === 11 && scorePlayer === 11) {
      randomNum = 1;
    }
    scorePlayer += randomNum;
    scorePlayerEl.textContent = scorePlayer;
    if (scorePlayer >= 11 && randomNum === 11) {
      randomNum = 1;
    }

    if (scorePlayer === 21) {
      blackJackWin();
    }

    if (scorePlayer > 21) {
      alert("BUSTED!");
      score.losses++;
      lossesPlayerEl.textContent = score.losses;
      sound2.play();
      isPlaying = false;
    }
  }
}

function blackJackWin() {
  alert("BLACK JACK! 🏆");
  score.wins++;
  winsPlayerEl.textContent = score.wins;
  sound3.play();
  isPlaying = false;
}
let cardsPulledBot = [];

btnStand.addEventListener("click", function () {
  // Prvo prikazemo 2 random karte za bot-a
  if (cardsPulled.length < 2) {
    alert("You must draw atleast 2 cards");
  } else {
    isHitAlive = false;

    for (let i = 0; i < 2; i++) {
      drawDealerCard();

      // Dodajemo skorove u varijablu
      scoreDealer += randomNum;
      scoreDealerEl.textContent = scoreDealer;
    }
    if (scoreDealer > scorePlayer) {
      // 1. GLAVNI
      if (scoreDealer === 21) {
        alert("Dealer got blackjack! You lost :(");
        sound2.play();
      } else {
        alert("You lost :( ");
        sound2.play();
      }
    } else if (cardsPulledBot[0] + cardsPulledBot[1] === 21) {
      alert("He got blackjackkkkkkkkkk"); // AKO DOBIJE 2 KECA NA POCETKU
    } else if (scorePlayer > scoreDealer && scoreDealer < 22) {
      // 2. GLAVNI
      drawDealerCard();
      scoreDealer += randomNum;
      scoreDealerEl.textContent = scoreDealer;
      if (scorePlayer === scoreDealer) {
        alert("Its draw!");
      } else if (scoreDealer > 21) {
        alert("You won! ");
        sound3.play();
      } else if (scoreDealer === 21) {
        alert("Dealer got blackjack!");
        sound2.play();
      } else if (scoreDealer > scorePlayer && scoreDealer < 22) {
        alert("You lost :( ");
        sound2.play();
      }

      if (scorePlayer > scoreDealer && scoreDealer < 22) {
        drawDealerCard();
        scoreDealer += randomNum;
        scoreDealerEl.textContent = scoreDealer;
        if (scoreDealer > scorePlayer && scoreDealer < 22) {
          alert("You lost :( ");
          sound2.play();
        } else if (scoreDealer > 21) {
          alert("You won! ");
          sound3.play();
        } else if (scoreDealer === 21) {
          alert("Dealer got blackjack");
          sound2.play();
        } else {
          alert("Its draw!");
        }
      }
    } else {
      // 3. GLAVNI
      alert("Its draw!");
    }
  }
});

function drawDealerCard() {
  randomNum = Math.floor(Math.random() * 13) + 2;
  switch (randomNum) {
    case 12:
    case 13:
    case 14:
      randomNum = 10;
      break;
    case 11:
      if (scorePlayer > 11) {
        randomNum = 1;
      } else {
        randomNum = 11;
      }
      if (scoreDealer > 11) {
        randomNum = 1;
      } else {
        randomNum = 11;
      }
      break;
  }
  const card = document.createElement("img");
  card.setAttribute("src", `img/cards/${randomNum}.png`);
  divDealerCards.appendChild(card);
  cardsPulledBot.push(randomNum);
}
// Vrati posle
//   let counter = 0;
//  let limit = 2;
//   if (isPlaying) {
//       let intervalId = setInterval(() => {
//         let randomNum = Math.floor(Math.random() * 13) + 2;
//         const card = document.createElement("img");
//         card.setAttribute("src", `img/cards/${randomNum}.png`);
//         divDealerCards.appendChild(card);
//         scoreDealer += randomNum;
//         scoreDealerEl.textContent = scoreDealer;
//         cardsPulled.push(randomNum);
//         counter++;
//         if (scoreDealer >= scorePlayer) {
//           alert("You lost");
//           sound2();
//           isPlaying = false;
//         }
//         if (scorePlayer > scoreDealer) {
//           clearInterval(intervalId);
//           intervalId = setInterval(() => {
//             randomNum = Math.floor(Math.random() * 13) + 2;
//             const card = document.createElement("img");
//             card.setAttribute("src", `img/cards/${randomNum}.png`);
//             divDealerCards.appendChild(card);
//             scoreDealer += randomNum;
//             scoreDealerEl.textContent = scoreDealer;
//             cardsPulled.push(randomNum);
//             counter++;
//             if (counter === 3) {
//               clearInterval(intervalId);
//             }
//           }, 1000);
//         }
//       }, 1000);
//       if (scorePlayer > scoreDealer) {
//         alert("You won!");
//         score.wins++;
//         winsPlayerEl.textContent = score.wins;
//         isPlaying = false;
//         sound3.play();
//       } else if (scorePlayer < scoreDealer) {
//         alert("You lost :(");
//         score.losses++;
//         lossesPlayerEl.textContent = score.losses;
//         sound2.play();
//         isPlaying = false;
//       } else {
//         score.draws++;
//         drawsPlayerEl.textContent = score.draws;
//         alert("Its draw!");
//         isPlaying = false;
//       }
//     }
