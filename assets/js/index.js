const mainRef = $("#mainMenu");
const gameRef = $("#gamePage");
const categoryRef = $("#categoryMenu");
const gameFinishedRef = $("#gameOver");
const winRef = $("#gameWin");
let currentLife = 3;
const lifeRef = $("#lifeBox");
lifeRef.html(currentLife);
let allQuestions = [];
let count = 0;
let numberCount = 1;
let winnerTrophy;

$(document).ready(function () {
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

  $(".answer-buttons").click(function(event) {
    if (event.target.value == allQuestions[count].correct_answer) {
      trueAnswer();
    } else {
      falseAnswer();
    };
    nextQuestion();
    endOfGame();
    winGame();
  })

  function trueAnswer() {
     $("#rightAnswer").removeClass("red").addClass("green").html("Correct!");
  }

  function falseAnswer() {
    $("#rightAnswer").removeClass("green").addClass("red").html("Incorrect!");
        lifeRef.html(--currentLife);
  }

  function nextQuestion() {
      let arrayLength = allQuestions.length;
      if (count == arrayLength) {
        count = 0;
      }
      count++;
      numberCount++;
      $("#questions").html(`${numberCount}. ${allQuestions[count].question}`);
  }

  function endOfGame() {
    if (currentLife == 0) {
      gameFinishedRef.show();
      gameRef.hide();
      currentLife = 3;
      lifeRef.html(currentLife);
    };
  };

  function winGame() {
    if (numberCount == 10 && currentLife == 3) {
      winnerTrophy = "gold";
      winRef.show()
      gameRef.hide();
      currentLife = 3;
      lifeRef.html(currentLife);
    } else if (numberCount == 10 && currentLife == 2) {
      winnerTrophy = "silver";
      winRef.show()
      gameRef.hide();
      currentLife = 3;
      lifeRef.html(currentLife);
    } else if (numberCount == 10 && currentLife == 1) {
      winnerTrophy = "bronze";
      winRef.show()
      gameRef.hide();
      currentLife = 3;
      lifeRef.html(currentLife);
    };
    $("#congratulationMessage").html(`You have won the ${winnerTrophy} cup!`);
    $(".trophy").addClass(`${winnerTrophy}`);
  }

  function menuGameFinished() {
    $(".mainMenuButtons").click(function (event) {
      if (event.target.value == "main-menu") {
        mainRef.show();
        gameFinishedRef.hide();
        winRef.hide();
      } else if (event.target.value == "again") {
        categoryRef.show();
        gameFinishedRef.hide();
        winRef.hide();
      };
      removeQuestions();
      resetCounting();
      rightAnswer();
    });
  };

  function rightAnswer() {
      $("#rightAnswer").html(" ");
  }

  function removeQuestions() {
      $("#questions").remove();
  }

  function resetCounting() {
       count = 0;
       numberCount = 1;
  }

  function startGame() {
    $("#startQuiz").click(function () {
      categoryRef.show();
      mainRef.hide();
    });
    $(".category-buttons").click(function () {
      gameRef.show();
      categoryRef.hide();
      $(".trophy").removeClass(`${winnerTrophy}`);
      $("#congratulationMessage").html(` `);
    });
  }

  

  menuGameFinished();
  startGame();
  startTheQuiz();

  // this is the last curly brackets
});
