/**
 * @author Simin Bekhsat <simin.bekhsat68@ed.cna.nl.ca>
 */

/* 	The imageSwap plugin swaps a large image with thumbnail images of unordered list element whenever 
	the user moves or clicks the mouse over thumbnail images. The plugin can take optional size
	for image as well as caption font size and color. It also accepts optional function. 
	====================================================
	---- Options:
 		imageWidth 			(pixels as String)
		imageHeight 		(pixels as String)
		captionFontSize 	(pixels as String)
		captionColor    	(standard color value as String)
		optionalFunction	(function)		*/


(function ($) {
	$.fn.imageSwap = function (options) {
		var defaults = { // stores the default options
			// Default options:
			imageWidth			: "700px",
			imageHeight			: "350px",
			captionFontSize		: "35px",
			captionColor		: "#002699",
			optionalFunction	: null
		};
		
		var settings = $.extend(defaults, options); // stores the optional values 
		
		return this.each(function() {
			var items = $("a");
			var image;
			var imageCaption;
						
			swappedImageProperties();
			
			// Handles the click event for each <a> element
			items.click(function(evt){
				
				var imageURL = $(this).attr("href");
				var caption = $(this).attr("title");
				
 				if (imageURL.slice(0, 4) != "http"){
					// prevents default action of <a> element if it is not a URL link
					evt.preventDefault();
				} 
				image.attr("src", imageURL);
				imageCaption.text(caption);
			}); //end of click
			
			
			// Handles the "mouse enter" event for each <a> element
			items.mouseenter(function(){
				var imageURL = $(this).attr("href");
				var caption = $(this).attr("title");
				
				// Updates the large image only if it is a thumbnail image and not a navigation menu link
 				if (imageURL.slice(0, 4) != "http"){
					image.attr("src", imageURL);
					imageCaption.text(caption);
				} 
			}); //end of mouseenter
			
			// Appends the generated image object and relevant caption to the end of body section of the HTML file
			// Also adds style and CSS properties to the generated image object
			function swappedImageProperties() {
                image = $('<img>');
                image.css({
					"padding-top"		: "10px",
					"padding-left"		: "100px",
					"width"				: settings.imageWidth,
					"height"			: settings.imageHeight
                });
				
				$("body").append(image);
               				
				imageCaption = $('<p></p>');
 				imageCaption.css({
					"padding-left"		: "300px",
					"margin"			: "0 auto",
					"font-size"			: settings.captionFontSize,
					"color" 			: settings.captionColor
				}); 

				$("body").append(imageCaption);

              }; // end of swappedImageProperties
			  
			if($.isFunction(settings.optionalFunction)) {
				//check if its a function
				settings.optionalFunction.call(this);
			}
			
		}); // end of each
	} // end of imageSwap
})(jQuery);
