# The Quiz Project 

The Quiz Project is a mini quiz game -- Master Quiz -- designed for people who are looking for a quick and fun way to test their general knowledge.

## UX

### Project Goals
 
Master Quiz main target is the people with a basic and above general knowledge with a predilection for science, history, geography. In the nearest future other categories related to intellectual knowledge will be added. The game is aimed to offer a straight forward and easy way to test your knowledge; something that can be done, for example, while waiting at the bus stop.

### Users Goals

* A game that can be fun and challenging in the same time.
* A straight forward path to start the quiz, without navigating throught different menus.
* A quiz that will have just educational categories, rather than lifestyle or main stream categories.
* A way to contact the products developer in case of any suggestions, complaints or any other relevant topics. 
* A way to follow the developer on social media. In this case you will be on track with new potential releases and updates.
* A quiz with different outcomes, depending on how many answers are right or wrong.

### Users Stories  

* As a user I am looking for a quiz game that will challenge me on an intelectual level and will be fun to play in the same time so I can always have handy a fun general knowledge test kit in my pocket.
* As a user I am looking for a quiz app that will be ready to start as soon as I open the app, without making me navigate through different menus before I have the option to actually start the quiz.
* As a user I would like to be able to keep track through social media of the app updates and other future realeses from the developer.
* As a user I would like a quiz app with a simple and clear design in order to focus on the questions rather than to be distracted by other features of the app during the game.
* As a user I would like to have the option to choose from different categories.
* As a user I would like to have different awards at the end of the game depending of my in-game performances.
* As a user I would like to be have the option to restart the game immediately if I fail or if I finish the game, without having to return to the main menu first.

### Game Owners Goals

* Providing an interactive quiz in order to attract players and make the users hungry for more future apps from the developer.
* Providing a quick way to start the quiz and an intuitive way to operate the app in order to encourage users to play multiple times in a row.
* Providing a game that will finish quickly, in this way the user can start and finish a game everytime and everywwhere, even if she/he has just a few minutes to spare (like waiting in a bus stop or queing for something).

## Design choices 

The goal of the app is to offer the users an easy and quick way to play the quiz. Therefore I have chosen a very simple and clear design without creating for the user potential distractions, especially when in the middle of the game.

### Fonts:
I chose to use [LATO](https://fonts.google.com/specimen/Lato?query=lato) as a main font for the entire app. In my opinion it is a clear and easy to read font and I believe it is especially important for displaying the questions. In this case the user will be able to quickly read and understand the text, her/his only being focus on the right answer.

I chose to use [BALSAMIQ SANS](https://fonts.google.com/specimen/Balsamiq+Sans?query=balsamiq) for the main title and the name of the category display, both being h1 elements. Although I wanted to keep a simple and clear design, I believe that for the main titles, having large font sizes, it will still be very easy to read by everyone. In the same time it will give a bit of "artistic" touch  to the game, making it more attractive for the eye and "friendly" for the user.

I chose to use [MONTESARRAT](https://fonts.google.com/specimen/Montserrat?query=montserrat) for the call-to-action buttons because, in my opinion, it is similar to lato (although with small differences) and will help in keeping the uniformity of the game.

### Icons: 

I used the [TROPHY](https://fontawesome.com/icons/trophy?style=solid) icon from [FONT AWSOME](https://fontawesome.com/) to diplay the player's reward, in this way the user will have a more clear and significant image of the reward.

### Colors:

I have used worm and soft colors for the project as I wanted to protect the user from eye fatigue due to long exposure to bright colors on the screen. This may also result to longer experiences of the user with the game.

* Primary: **Light Blue** #7fe7dc. I chose this as a main color because covering most of the viewport at all section, in my opinion, it fits to be a warm and in the same time happy and to a certain level bright color. It will help in keeping the player relaxed and exited.

* Secondary: **Shade of Dark Blue** #316879. I chose this color for the center container because it is close to the main color, in the same time providing the sufficient contrast in relation to the rest of the page. It makes the app clear and uniform.

* Tertionary color: **Orange** #f47a60. I chose this color for call-to-action buttons because it provides the optimal contrast from the rest of the colors, making the buttons stand up on the viewport. As a result it makes the app more intuitive.

* Text color: **Light Grey** #ced7d8. This color makes the text visible in contrast with the dark blue and orange used for the center container and buttons, makinging it easy to read. It's warm shade of light grey contributes to the uniformity of the app.

I have also used **Green** rgb(6, 191, 43) and **Red** rgb(153, 43, 43) for the color of the text displayed when answering the question, as they they have the same global significance indicating good or wrong outcomes.

### Background:

I have chosen not to use any background images throughout the entire game, because I believe that the combination of colors used is sufficient to keep the player focused and excited, without additional distractions or features.

## Wireframes:

I built the wireframe for this project using [BALSAMIQ](https://balsamiq.com/). I've started creating the basic structure, basically the jumbotron central container. Afterwords I've added within it the call-to-action buttons and the texts (questions, titilles, etc). Advancing in the project I've decided to add or remove some of the features created initially in the wireframe, therefore the wireframe is slightly different than the final product. I've added 2 extra categories; changed the main title, the text from the true/false buttons, the trophy display; removed email contact form and about section. I also decided not to add any images, preffering to stick only to the colors. You can view my wireframes [here](https://github.com/Astig-1982/The-Quiz-Project/blob/master/wireframes/The%20Quiz%20Project.pdf). You can also see the wireframe on gitpod in the 'wireframes' directory. 

## Technologies used:

### Languages:

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

* [JavaScript](https://www.javascript.com/)

### Tools & Libraires:

* [jQuery](https://jquery.com/)

* [Bootstrap](https://getbootstrap.com/)

* [Font Awsome](https://fontawesome.com/)

* [Google Fonts](https://fonts.google.com/)

## Testing:

As this was my first time being exposed to an API, my testing was extremely thorough, making sure that I scrutinized every line of code and detail. This also allowed me to learn in depth more how to work with an API. Testing involved my own personal testing and also that of my friends/users.

## Testing Stories:

* I have tested my **HTML** code using [The W3C Markup Validation Service](https://validator.w3.org/). It has found no errors. It has found, however, a couple of warnings. It found that the type attribute is unnecessary for JavaScript resources at the js folder script tag. I have since removed it. It was also a warning regarding an empty heading at the category title element. This content of this element is to be, of course, set with javascript. No action has been taken.

* I have tested my **CSS** code using [CSS Validation Service](https://jigsaw.w3.org/css-validator/). It has found 1 error. I had a typo when styling the main buttons for large screens - instead of 'width' was 'windows' (probably due to autocorrecrt). I have since corrected the error.

* I have also tested the catch method used when fetching the API's data. I have simply removed the URL, in this case the data from the API couldn't be accessed.

* Half way thorugh the project, going through my HTML code, at the main section I have noticed I had more than 12 columns in a row. I have corrected the mistake immediately.

* I have tested numerous times the outcome of the true and false buttons to check if it's corresponding with the question's correct answer. I have done this by simply logging the data 'fetched' from the API to the console. Like this, I had permanent access to all to correct anwers and see if there is a match. This also helped in adjusting the outcome for winning the game at the congratulations section, as I had permanent control on how many mistakes I want to finished the game with, thus testing the diplay of all three trophys. I have removed the console.log function at the end of the project.

## Overall:

**Responsivness**:

I knew that the project needed to be fully responsive on all types of screen, especially mobile friendly. In order to accomplish this requirement I used Bootstrap as HTML framework, this option being the one that I'm most comfortable using at the moment. I've carried the testing using dev-tools throughout and a final test after the completion.

**Result**:

The game is fully responsive as expected, all elements and content fit within their boundaries and are easy to see on any device.

## Features:

* Five differents sections which are visible only one at a time.
* Display of different quotes, relevant to the category chosen.
* Call-to-action button that allows you to play again immediately as the game finished.
* Animated trophy upon winning the game.

### Five different sections:

I've decided to use five different sections that will be hidden from the user and only visible when they are called. Only one section at a time is visible to the user. This makes - in my opinion - the game and the navigations through menus more intuitive.

**Implementaion**:

The sections are hidden or shown by using the jQuery methods show() and hide(). They are called at certain events during the game. For example, upon clicking on the 'START QUIZ' button from the landing page, the main section will hide and the category section will be displayed.

### Display of quote: ###

* I've decided to add this small feature as I believe it makes the game a bit more attractive and maybe - why not - inspire or motivate the player.

**Implementation**:

* I've created this feature with the help of JavaScript, using a switch statement when the category is chosen. 

### Call-to-action button to play again: ###

* I chose to add this simple feature as I believe is providing a more straight forward path to quickly play again a game, without having to navigate throught the main menu.

**Implementation**:

* I've created a click event for the call-to-action buttons, that will target the button displayed when the game is over or upon winning the game, with the value of 'again'. The click event hides the visible section and displays the category section with jQuery hide and show methods.

### Animated trophy: ###

* I chose to add this feature because it adds extra dynamicity to the game.

**Implementaion**:

* I've created an animation in CSS with where I increase - using the transform property - the scale of the trophy icon from 1 to 8 (the values vary depending the size of the screen). I've added the animation into a class that will be added to the trophy icon in the DOM with the help of jQuery.

