let mainScreen = document.querySelector(".mainScreen");
let nameInput = document.querySelector(".nameInput");
let playBtn = document.querySelector(".playBtn");
let nameError = document.querySelector(".nameError");
let heading = document.querySelector(".heading");
// =============
// Player One Screen

let playerOneScreen = document.querySelector(".playerOneScreen");
let playerOneInput = document.querySelector(".playerOneInput");
let playerPlayBtn = document.querySelector(".playerPlayBtn");
let playerOneError = document.querySelector(".playerOneError");

playBtn.addEventListener("click", function () {
  if (nameInput.value == "") {
    nameError.style.display = "block";
  } else {
    heading.innerHTML = "Player One";
    playerOneScreen.style.display = "block";
    mainScreen.style.display = "none";
  }
});

// ====================
playerPlayBtn.addEventListener("click", function () {
  // if (playerOneInput.value == "") {
  //   playerOneError.style.display = "block";
  // }
  if (playerOneInput.value < 1 || playerOneInput.value > 10) {
    console.log("Error");
  }
   else {
    if (playerOneInput.value - 15) {
      console.log("Ami Number and 3rd screen a jao");
    }
     else {
      console.log("Ami Number Na");
    }
  }
});

// ======================
