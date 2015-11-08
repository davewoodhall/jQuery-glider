(function( $ ) {
	$.fn.sliderOne = function(settings) {
		$(this).each(function(index, value){
			var caption = $(this).children('p'),
				defaults = {
					iconAfter: null,
					speed: 250
				},
				image = $(this).children('img'),
				mobile = ($(window).width() <= 767),
				opts = $.extend({}, defaults, settings),
				out,
				text = caption.html(),
				titleBox = $(this).children('h3');

			// Append sliding content
			out =
				'<div class="sliderOne-caption">'+
					text+
				'</div>';
			titleBox.wrap('<div class="titleWrap"></div>');
			$('.titleWrap', $(this)).append(out);

			$(this).css({
				'background-image': 'url('+image.attr("src")+')',
				'background-size': 'cover',
				'background-position': 'center center',
				'height': $(this).outerWidth()
			});
			caption.remove();
			image.remove();

			// Deal with special options
			if (opts.iconAfter)
				$(this).append('<div class="gliderImage">'+opts.iconAfter+'</div>');

			$('.sliderOne-caption', $(this)).slideUp(opts.speed);

			$(this).mouseenter(function(){
				if($(window).width() <= 767)
					return;
				else
					$(this).css({
						'height': $(this).outerWidth()
					});
				$('.sliderOne-caption', $(this)).slideDown(opts.speed);
			}).mouseleave(function(){
				if($(window).width() <= 767)
					return;
				else
					$(this).css({
						'height': $(this).outerWidth()
					});
				$('.sliderOne-caption', $(this)).slideUp(opts.speed);
			});
		});
	};
})(jQuery);
