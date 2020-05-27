const mainRef = $("#mainMenu");
const gameRef = $("#gamePage");
const categoryRef = $("#categoryMenu");
const gameFinishedRef = $("#gameOver");
const completeRef = $("#gameCompleted");
const lifeRef = $("#lifeBox");
let currentLife = lifeRef.html();
let allQuestions = [];
let count = 0;
let numberCount = 1;
let winnerTrophy;

$(document).ready(function () {
  $("#quickView").click(function () {
    let el = $(this).html();
    if (el == "BACK") {
      $(".title").html(
        '<h1 id="main-title" class="uppercase">master quiz</h1><h2>The Quick Way To Test Your Knowledge</h2><button id="startQuiz" class="main-buttons">start quiz</button>'
      );
      $("#quickView").html("QUICK VIEW");
    } else {
      $(".title").html(
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p><p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>'
      );
      $("#quickView").html("BACK");
    }
  });

  function startTheQuiz() {
    $(".category-buttons").click(function () {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${this.id}&type=boolean`
      )
        .then((res) => res.json())
        .then((data) => {
          allQuestions = data.results.map(function (question) {
            return question;
          });
          console.log(allQuestions);
          $("#questions-container").prepend(
            `<p id="questions">${numberCount}. ${allQuestions[count].question}</p>`
          );
        });
    });
  }

  function trueOrFalse() {
    $(".answer-buttons").click(function () {
      if (event.target.value == allQuestions[count].correct_answer) {
        $("#rightAnswer").html("that is the correct answer");
      } else {
        $("#rightAnswer").html("that is not the correct answer");
        lifeRef.html(--currentLife);
      }
      let arrayLength = allQuestions.length;
      if (count == arrayLength) {
        count = 0;
      }
      count++;
      numberCount++;
      $("#questions").html(`${numberCount}. ${allQuestions[count].question}`);
      endOfGame();
      winGame();
    });
  }

  function endOfGame() {
    if (currentLife == 0) {
      gameFinishedRef.show();
      gameRef.hide();
    };
  };

  function menuGameOver() {
    $(".main-buttons").click(function () {
      if (event.target.value == "main-menu") {
        mainRef.show();
        gameFinishedRef.hide();
        $("#questions").remove();
        count = 0;
        numberCount = 1;
      } else if (event.target.value == "again") {
        categoryRef.show();
        gameFinishedRef.hide();
        $("#questions").remove();
        count = 0;
        numberCount = 1;
      };
    });
  };

  function startGame() {
    $("#startQuiz").click(function () {
      categoryRef.show();
      mainRef.hide();
    });
    $(".category-buttons").click(function () {
      gameRef.show();
      categoryRef.hide();
    });
  }

  function winGame() {
    if (numberCount == 10 && currentLife == 3) {
      winnerTrophy = "gold";
      completeRef.show()
      gameRef.hide();
    } else if (numberCount == 10 && currentLife == 2) {
      winnerTrophy = "silver";
      completeRef.show()
      gameRef.hide();
    } else if (numberCount == 10 && currentLife == 1) {
      winnerTrophy = "bronze";
      completeRef.show()
      winnerTrophy.hide();
    }
    $("#congratulationMessage").html(`You have won the ${winnerTrophy} cup!`);
    $(".trophy").addClass(`${winnerTrophy}`);
  }

  menuGameOver();
  startGame();
  startTheQuiz();
  trueOrFalse();

  // this is the last curly brackets
});
