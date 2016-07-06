// $ = jQuery, same thing//
$(document).ready(function() {
	
	//alert("Hey");	

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 16}, 2000);
	});

	$("#updown").click(function(){
		$("#image").slideUp(5000).slideDown(2000);
	});

	$("#sizechange").click(function(){
		$("#image").animate({
			left: '250px',
			height: '+=250px',
			width: '+=150px'
		});
	});

	$("#left").click(function(){
		$("#image").animate({"left": "+=50px"}, "slow");
	});
	$("#right").click(function(){
		$("#image").animate({"left": "-=50px"}, "slow");
	});




});

