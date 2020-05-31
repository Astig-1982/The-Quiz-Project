/* initializing the variables below */

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


/* the function below is for fetching the questions and rendering them into the DOM */

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

  /* the event below is for assigning true or false value to the questions */

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

  /* the function below is for the outcome of #rightAnswer inner HTML if the answer is correct */

  function trueAnswer() {
     $("#rightAnswer").removeClass("red").addClass("green").html("Correct!");
  }

  /* the function below is for the outcome #rightAnswer inner HTML if the answer is incorrect */

  function falseAnswer() {
    $("#rightAnswer").removeClass("green").addClass("red").html("Incorrect!");
        lifeRef.html(--currentLife);
  }

  /* the function below is for displaying the next question */

  function nextQuestion() {
      let arrayLength = allQuestions.length;
      if (count == arrayLength) {
        count = 0;
      }
      count++;
      numberCount++;
      $("#questions").html(`${numberCount}. ${allQuestions[count].question}`);
  }

  /* the function below is for game over display */

  function endOfGame() {
    if (currentLife == 0) {
      gameFinishedRef.show();
      gameRef.hide();
      currentLife = 3;
      lifeRef.html(currentLife);
    };
  };

  /* the function below is for winning the game display */

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

  /* the function below is for returning to the main menu or choosing the category section */

  function menuGameFinished() {
    $(".mainMenuButtons").click(function (event) {
      if (event.target.value == "main-menu") {
        mainRef.show();
      } else if (event.target.value == "again") {
        categoryRef.show();
      };
      gameFinishedRef.hide();
      winRef.hide();
      removeQuestions();
      resetCounting();
      rightAnswer();
    });
  };

  /* the function below is for emptying the right answer container */

  function rightAnswer() {
      $("#rightAnswer").html(" ");
  }

  /* the function below is for removing the questions element from the DOM */

  function removeQuestions() {
      $("#questions").remove();
  }

  /* the function below is for reseting the count and numberCount variables */

  function resetCounting() {
       count = 0;
       numberCount = 1;
  }

  /* the function below is for starting the game and displaying different sections */

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
});
