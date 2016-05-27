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
	$('#login').click(function(){
		event.preventDefault();
		$('#black-bg').css({
			"display":"block"
		});
		setTimeout(function(){
			$('#black-bg').css({
				'opacity':'0.7'
			});
		}, 50);
		setTimeout(function(){
			$('#login-modal').css({
				'display':'block',
			});
			setTimeout(function(){
				$('#login-modal').css({
					'bottom':'0%'
				});
			}, 50);
		}, 50);
		/*$('.modal').css({
			'bottom':'0%'
		});*/
	});
	$("#black-bg").click(function(){
		$('#black-bg').css({
			"opacity":"0"
		});
		setTimeout(function(){
			$('#black-bg').css({
				'display':'none'
			});
		}, 100);
		setTimeout(function(){
			$('#login-modal').css({
				'bottom':'-100%',
			});
			setTimeout(function(){
				$('#login-modal').css({
					'display':'none'
				});
			}, 100);
		}, 50);
	});
	$('#form01').submit(function(){
		var name = document.getElementById('email-form01');
		name = name.value;
		$('#display-name').append("<p>Hi, " + name + "</p>");
		return false
	});
})
();