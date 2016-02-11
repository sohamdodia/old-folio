$(document).ready(function() {
	
	$('.handle').on('click',function(){
		$('nav ul').toggleClass('showing');
	});
	// if($('nav ul li')).on('click',function(){
	// 	$('nav ul').toggleClass('showing');
	// });
	
	// $('handle').click(function() {
	// 	$('nav ul').toggleClass('showing');
	// })
	
	
	var sections = $("div");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         	navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});
	

	// var buttons = $('.closeOnClick');
	// console.log(buttons);
	// for (var i = 0; i < buttons.length; i++) {
	// 	var button = buttons[i];
	// 	console.log(button);
	// 	button.click(function () {
	// 		console.log('clicked')
	// 	});
	// }

	var buttons = document.querySelectorAll('.closeOnClick');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function (e) {
			$('nav ul').toggleClass('showing');
		});
	}

});