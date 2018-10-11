//VANILLA JS
// document.getElementById('btnShow').onclick = () => {
// 	document.getElementById('hiddenText').style.display = "block";
// }

//JQUERY VERSION 1
// $('#btnShow').click( () => {
// 	$('#hiddenText').show(); //show element
// } );

// VERSION 2
// $('#btnShow').click( () => {
// 	$('#hiddenText').toggle(); //show & hide
// } );

// VERSION 3: When the document (current page being viewed), the code will be initialized/load by the browser.
// BEST PRACTICE IS TO PUT EVERYTHING UNDER $(document).ready UNLESS you want them to load before all your other tags are ready.
// $(document).ready(() => {

// 	$('#btnShow').click( () => {
// 		$('#hiddenText').toggle(); //show & hide
// 	} );

	// console.log('ready');

	// $('#hiddenText').show();

// });

//VERSION 4: REPLACE TEXT
//WAYS OF ASSIGNING MULTIPLE EVENTS TO A VARIABLE:

// $(document).ready(() => {

// 	$('#btnShow').click( () => {
// 		$('#hiddenText').show().html('HEHEHE').css('color', 'red'); // CHAINING

// 		let text = $('#changeText'); // USING A VARIABLE
// 		text.html(' lorem fdsfdsafdsafdsafdsafdsa ');
// 		text.css('color','blue');
// 	} );

// });


//VERSION 5: CONCATINATION
$(document).ready(() => {

	$('#btnShow').click( () => {

		let tagline = $('#hiddenText');
		let text = $('#changeText'); 

		tagline.html('new words').css('color','red');
		tagline.html('plus another word '); 
		console.log();

		text.html (tagline.html() +'lorem fdsfdsafdsafdsafdsafdsa ');  // CONCATINATION // note () == GET existing value of tagline.html and add it to SET value for text.html
		text.css('color','blue');
	} );

});

