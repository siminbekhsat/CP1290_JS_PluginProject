$(document).ready(function() {
	// preload images
 	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
    
	// The imageSwap plugin swaps a large image with thumbnail images of unordered list element whenever 
	// the user moves or clicks the mouse over thumbnail images. The plugin can take optional size
	// for image as well as caption font size and color. It also accepts optional function. 
	// ====================================================
	// ---- Options:
	// 		imageWidth 			(pixels as String)
	//		imageHeight 		(pixels as String)
	//		captionFontSize 	(pixels as String)
	//		captionColor    	(standard color value as String)
	//		optionalFunction	(function) 
	
	$("#image_list").imageSwap(
	// options for imageSwap plugin:
 		 {
			imageWidth			: "800px",
			imageHeight			: "450px",
			captionFontSize		: "50px", 
			captionColor		: "#b30059",
			optionalFunction	: function(){
				console.log("Done in imageSwap plugin! "); // See console log for demo
			}
		}  
	); // end of imageSwap
	
	
	
	// The highlightMenu plugin changes the properties of navigation links menu whenever 
	// the user moves the mouse over each link element and highlights them.
	// The plugin can take optional background and text's initial color as well as highlighted 
	// colors when mouse event happens. Also the width of menu tabs are changable.
	// ====================================================
	// ---- Options:
	//		backgroundColor 	(standard color value as String)
	//		color				(standard color value as String)
	//		hoverBgColor		(standard color value as String)
	//		hoverColor			(standard color value as String)
	//		linkWidth			(pixels as String)
	
	$("#image_list").highlightMenu( 
	// options for highlightMenu plugin:
	    {
			backgroundColor		: '#dfe3e6',
			color				: '#006620',
			hoverBgColor		: '#800000',
			hoverColor			: '#ffff80',
			linkWidth			: '250px' 
		} 
	); // end of highlightMenu

}); // end ready