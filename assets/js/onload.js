// jQuery on document loaded
$(document).ready(function(){
	onload.loaded = true;
	// Define listener for click event
	$('button').bind('click', onload.handleClick);
});

// Define Localized Object
var onload = {};
// Button Click Handler
onload.handleClick = function(e) {
	alert(e + ' clicked');
};
