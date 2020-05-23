$(document).ready(function () {
  $("#quickView").click(function () {
    let el = $(this).html();
    if (el == "BACK") {
      $(".title").html(
        '<h1 class="display-4">SMART QUIZ</h1><h2 class="lead">The Fun Way To Test Your Knowledge</h2><button id="startQuiz">START QUIZ</button>'
      );
      $("#quickView").html("QUICK VIEW");
    } else {
      $(".title").html(
        '<p class="display-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p><p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>'
      );
      $("#quickView").html("BACK");
    }
  });

  /* the below onclick event renders the science questions */

  $("#science").click(function () {
    let main = $("#mainMenu");
    let game = $("#gamePage");
    let category = $("#categoryMenu");
    let gameFinished = $("#gameOver");
    fetch(
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=boolean"
    )
      .then((res) => res.json())
      .then((data) => {
        let questions = [];
        questions = data.results.map(function (question) {
          return question;
        });
        console.log(questions);
        let count = 0;
        let numberCount = 1;
        $('#questions-container').prepend(`<p id="questions">${numberCount}. ${questions[count].question}</p>`);
        $(".answer-buttons").click(function () {
          if (event.target.value == questions[count].correct_answer) {
            $("#rightAnswer").html("that is the correct answer");
          } else {
            $("#rightAnswer").html("that is not the correct answer");
            let life = $("#lifeBox");
            let currentLife = life.html();
            life.html(--currentLife);
            if (currentLife == 0) {
              gameFinished.show();
              game.hide();
            }
          }
          let arrayLength = questions.length;
          if (count == arrayLength) {
            count = 0;
          }
          count++;
          numberCount++;
          $("#questions").html(`${numberCount}. ${questions[count].question}`);
        });
      });
      $('.main-buttons').click(function() {
        if (event.target.id == 'main-menu-button') {
        main.show();
        gameFinished.hide();
        $('#questions').remove();
      } else if (event.target.id == 'try-again-button') {
        category.show();
        gameFinished.hide();
        $('#questions').remove();
      }
      });
  });

  

  /* the below onclick event renders the history questions */

  $("#history").click(function () {
    let main = $("#mainMenu");
    let game = $("#gamePage");
    let category = $("#categoryMenu");
    let gameFinished = $("#gameOver");
    fetch(
      "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=boolean"
    )
      .then((res) => res.json())
      .then((data) => {
        let questions = [];
        questions = data.results.map(function (question) {
          return question;
        });
        console.log(questions);
        let count = 0;
        let numberCount = 1;
        $('#questions-container').prepend(`<p id="questions">${numberCount}. ${questions[count].question}</p>`);
        $(".answer-buttons").click(function () {
          if (event.target.value == questions[count].correct_answer) {
            $("#rightAnswer").html("that is the correct answer");
          } else {
            $("#rightAnswer").html("that is not the correct answer");
            let life = $("#lifeBox");
            let currentLife = life.html();
            life.html(--currentLife);
            if (currentLife == 0) {
              gameFinished.show();
              game.hide();
            }
          }
          let arrayLength = questions.length;
          if (count == arrayLength) {
            count = 0;
          }
          count++;
          numberCount++;
          $("#questions").html(`${numberCount}. ${questions[count].question}`);
        });
      });
     $('.main-buttons').click(function() {
        if (event.target.id == 'main-menu-button') {
        main.show();
        gameFinished.hide();
        $('#questions').remove();
      } else if (event.target.id == 'try-again-button') {
        category.show();
        gameFinished.hide();
        $('#questions').remove();
      }
      });
  });

  function startGame() {
    let main = $("#mainMenu");
    let category = $("#categoryMenu");
    let game = $("#gamePage");
    $("#startQuiz").click(function () {
      category.show();
      main.hide();
    });
    $(".category-buttons").click(function () {
      game.show();
      category.hide();
    });
  }
  startGame();
});
