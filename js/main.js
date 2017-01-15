function askQuestions(){


	var firstName = prompt('What is your first name?'),
		lastName = prompt('What is your last name?'),
		fullName = firstName + ' ' + lastName;

	console.log(fullName);

	/* if the user's first name is General  and last name is not Assembly, then great the General*/


	if (firstName === 'General') {

		if (lastName !== 'Assembly') {

			console.log('Greetings General')
		}
	}


	var age = prompt('what is your age?');
	age = parseInt(age);

	/*this is a conditioning statement where we're asking an if or statement*/
	if (age>=18) {

		console.log('user is an adult');
	}else if (age>=13){

		console.log('user is a teenager');
	}else{

		console.log('user is a child');
	}

}




/*hey jquery, when the page has loaded, do the following things inside the curly brackets*/
$(function() {
	$('img').on('click', askQuestions);



	/*hello jquery, when the user clicks an h3 element run the following code inside the curly brackets*/
	$('h3').on('click', function(){

		/*hello jquery, next hide and then reveal, called toggle, the element*/
		$(this).next().slideToggle();
	});

});





