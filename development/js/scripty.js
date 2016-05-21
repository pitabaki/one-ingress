(function(){
	$('.dropdown-button').dropdown({
		inDuration: 500,
		outDuration: 225,
		constrain_width: false, // Does not change width of dropdown to that of the activator
		hover: false, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: false, // Displays dropdown below the button
		alignment: 'left' // Displays dropdown with edge aligned to the left of button
	});
	$('.dropdown-constant').hover(function(){
		$('.nest-dropdown').css('cssText', 'min-height: 0px !important;');
	});
	$('.nest-trigger').hover(function(){
		$('.nest-dropdown').css('cssText', 'min-height: 150px !important;');
	});
})
();