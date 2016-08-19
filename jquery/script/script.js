$(document).ready(function(){
	
	$("h1").click(function(){
		console.log($(this));
		$(this).add("p").not("p.second").attr("style","background-color:green");
	});

	
});