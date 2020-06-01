/* initializing the variables below */
const mainRef = $("#mainMenu");
const gameRef = $("#gamePage");
const categoryRef = $("#categoryMenu");
const gameFinishedRef = $("#gameOver");
const winRef = $("#gameWin");
let currentLife = 3;
const lifeRef = $("#lifeBox");
let allQuestions = [];
let count = 0;
let numberCount = 1;
let winnerTrophy;
const categoryTitle = $("#catTitle");
const categoryQuote = $("#quote");




$(document).ready(function () {

    /* the function below is for setting the player's life to 3  */
function playerLife() {
       lifeRef.html(currentLife);
   }

   /* the function below is for fetching the questions and rendering them into the DOM */
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
        categoryDisplay(this.id);
    });
  }

  /* the function below is for displaying the category title and its relevant quote */
  function categoryDisplay(categoryId) {
  switch (categoryId) {
           case "23": categoryTitle.html("history");
           categoryQuote.html(`"History is who we are and why we are the way we are."<br><a href="https://en.wikipedia.org/wiki/David_McCullough"aria-label="find out about John F.Kennedy" target="_blank"
						rel="noopener" class="quote-authors">David McCullough</a>`);
           break
           case "17": categoryTitle.html("science");
           categoryQuote.html(`"the good thing about science is that is true wether or not you believe in it."<br><a href="https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson"aria-label="find out about Dr. N.deGrasse Tyson" target="_blank"
						rel="noopener" class="quote-authors">Dr. N.deGrasse Tyson</a>`);
           break
           case "22": categoryTitle.html("geography");
           categoryQuote.html(`"Geography is an earthly subject, but a heavenly science.<br><a href="https://en.wikipedia.org/wiki/Edmund_Burke"aria-label="find out about Edmund Burke" target="_blank"
						rel="noopener" class="quote-authors">Edmund Burke</a>"`);
           break
           case "9": categoryTitle.html("general");
           categoryQuote.html(`"Knowledge is love and light and vision."<br><a href="https://en.wikipedia.org/wiki/Helen_Keller"aria-label="find out about Helen Keller" target="_blank"
						rel="noopener" class="quote-authors">Helen Keller</a>`);
  }
}

  /* the event below is for assigning true or false value to the questions */
  $(".answer-buttons").click(function(event) {
    if (event.target.value == allQuestions[count].correct_answer) {
      correctAnswer();
    } else {
      incorrectAnswer();
    };
    nextQuestion();
    endOfGame();
    winGame();
  })

  /* the function below is for the outcome if the answer is correct */
  function correctAnswer() {
     $("#rightAnswer").removeClass("red").addClass("green").html("Correct!");
  }

  /* the function below is for the outcome if the answer is incorrect */
  function incorrectAnswer() {
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
      playerLife();
    };
  };

  /* the function below is for winning the game display */
  function winGame() {
    if (numberCount == 10 && currentLife == 3) {
      winnerTrophy = "gold";
      winRef.show()
      gameRef.hide();
      currentLife = 3;
      playerLife();
    } else if (numberCount == 10 && currentLife == 2) {
      winnerTrophy = "silver";
      winRef.show();
      gameRef.hide();
      currentLife = 3;
      playerLife();
    } else if (numberCount == 10 && currentLife == 1) {
      winnerTrophy = "bronze";
      winRef.show()
      gameRef.hide();
      currentLife = 3;
      playerLife();
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
  playerLife();
  startGame();
  startTheQuiz();
});
