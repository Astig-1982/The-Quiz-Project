$(document).ready(function(){
	$('#quickView').click(function(){
		let el = $(this).html();
		if(el == 'BACK') {
			$('.title').html('<h1 class="display-4">SMART QUIZ</h1><h2 class="lead">The Fun Way To Test Your Knowledge</h2><button id="startQuiz">START QUIZ</button>');
			$('#quickView').html('QUICK VIEW');
		} else {
			$('.title').html('<p class="display-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p><p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>');
			$('#quickView').html('BACK');
		};
	});
});