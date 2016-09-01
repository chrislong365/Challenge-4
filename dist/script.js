

(function($){
	$('li > a').click(function(event){	
		$('a').removeClass('active'),
		$(this).addClass('active'),
		console.log('yes'),
		event.preventDefault();
	})
})(jQuery);