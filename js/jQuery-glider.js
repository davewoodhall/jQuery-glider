/* ====================================================================================================
 * jQuery glider v 0.0.3
 * Author:
 * 		Dave Woodhall
 * 		info@davewoodhall.com
 * Syntax
 * ----------------------------------------------------------------------------------------------------
	   <div class="glider">
		   <h3>Title</h3>
		   <img src="path/to/image.jpg" />
		   <p>
			   This text will be used as caption. <a href="#">Links are accepted.</a>
		   </p>
	   </div>
 * ==================================================================================================== */
$.fn.glider = function(settings) {
   $(this).each(function(index, value){
	   var _e 				= $(this),
		   _i					= (_e.attr('data-type') && _e.attr('data-type') == 'image-only'),
		   caption 			= _e.children('p'),
		   defaults 		= {
			   format      : 'square',		// auto | square
			   iconAfter	: null,
			   showTitle	: true,
			   speed			: 250
		   },
		   getHeight		= function(){
										if(opts.format == 'auto')
											return _e.attr('data-img-height');
										return _e.outerWidth();
								  },
		   image 			= _e.children('img'),
		   mobile 			= ($(window).width() <= 767),
		   opts 				= $.extend({}, defaults, settings),
		   out 				= '',
		   text 				= (_i) ? '' : caption.html(),
		   titleBox 		= _e.children('h3') || false;

	   /* ====================================================================================================
		* Get image height and set as data attribute to the glider as a reference
		* ==================================================================================================== */
	   _e.attr( 'data-img-height', image.height() );

	   /* ====================================================================================================
		* Set image background and make it cover the whole element;
		* Set the height
		* ==================================================================================================== */
	   _e.css({
		   'background-image'		: 'url('+image.attr("src")+')',
		   'background-size'		: 'cover',
		   'background-position'	: 'center center',
		   'height'				: getHeight() + 'px'
	   });

	   /* ====================================================================================================
		* If not an image-only element...
		* ==================================================================================================== */
	   if(!_i) {
		   /* ====================================================================================================
			* Set new DOM structure for glider element
			* ==================================================================================================== */
		   out =
			   '<div class="sliderOne-caption">'+
				   text+
			   '</div>';
		   titleBox.wrap('<div class="titleWrap"></div>');
		   $('.titleWrap', _e).append(out);

		   /* ====================================================================================================
			* Remove original DOM content
			* ==================================================================================================== */
		   caption.remove();
		   image.remove();

		   /* ====================================================================================================
			* Slide up title and description, if any given
			* ==================================================================================================== */
		   $('.sliderOne-caption', _e).slideUp(opts.speed);

		   /* ====================================================================================================
			* Set icon indication for hidden content
			* ==================================================================================================== */
		   if (opts.iconAfter)
			   _e.append('<div class="gliderImage">'+opts.iconAfter+'</div>');

		   /* ====================================================================================================
			* Hide the title if desired
			* ==================================================================================================== */
		   if(!opts.showTitle)
			   titleBox.slideUp(opts.speed);

		   /* ====================================================================================================
			* Manage show/hide of the title and description
			* ==================================================================================================== */
		   _e.mouseenter(function(){
			   if(mobile)
				   return;
			   $('.sliderOne-caption', _e).slideDown(opts.speed);
			   if(!opts.showTitle)
				   titleBox.slideDown(opts.speed);
		   }).mouseleave(function(){
			   if(mobile)
				   return;
			   $('.sliderOne-caption', _e).slideUp(opts.speed);
			   if(!opts.showTitle)
				   titleBox.slideUp(opts.speed);
		   });
	   }
   });
};