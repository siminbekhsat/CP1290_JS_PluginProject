/**
 * @author Simin Bekhsat <simin.bekhsat68@ed.cna.nl.ca>
 */

/*   
	 The highlightMenu plugin changes the properties of navigation links menu whenever 
	 the user moves the mouse over each link element and highlights them.
	 The plugin can take optional background and text's initial color as well as highlighted 
	 colors when mouse event happens. Also the width of menu tabs are changable.
	 ====================================================
	 ---- Options:
			backgroundColor 	(standard color value as String)
			color				(standard color value as String)
			hoverBgColor		(standard color value as String)
			hoverColor			(standard color value as String)
			linkWidth			(pixels as String) */

(function ($) {
	$.fn.highlightMenu = function (options) {
		var defaults = {
			// default options:
			backgroundColor 	: '#ffffff',
			color 				: '#000000',
			hoverBgColor  		: '#00b33c',
			hoverColor 			: '#e6ffee',
			linkWidth 			: '225px' 
		};
		
		var settings = $.extend(defaults, options);
		
		return this.each(function() {
			var items = $("li a");		// all a elements within the list
						
			items.css('font-family', 'arial, helvatica, sans-serif')
				.css('fontSize', '35px')
				.css('font-wight', 'bold')
 				.css('text-decoration', 'none')
				.css('background-color', settings.backgroundColor)
				.css('color', settings.color)
				.css('width', settings.linkWidth);
			
			//	Handles the mouse over event		
			items.mouseover(function(){
				$(this).css('background-color', settings.hoverBgColor)
						.css('color', settings.hoverColor)
				});
				
			//	Handles the mouse out event		
			items.mouseout(function(){
				$(this).css('background-color', settings.backgroundColor)
						.css('color', settings.color)
				});
		});
	} // end of highlightMenu
})(jQuery);
