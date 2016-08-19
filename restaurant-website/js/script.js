$(function(){
	$("#navbarToggled").blur(function(event){
        var screenWidth=window.innerWidth;
		if(screenWidth<768){
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
});