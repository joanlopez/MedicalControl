$(document).ready(function() {
	resize();
	hideScrollbar();
});

$(window).resize(resize);

function toogleHeader() {
	if($("#header").css('display') != 'none') {
		$("#header").css('display','none')
	}
	else {
		$("#header").css('display','inherit')	
	}
}

function resize() {
	if($(window).height() >= 400 && $(window).height() <= 500) {
		$(".fa").removeClass("fa-3x");
		$(".fa").addClass("fa-2x");
	}
	else if($(window).height() >= 500) {
		$(".fa").removeClass("fa-2x");
		$(".fa").addClass("fa-3x");
	}
	else {
		$(".fa").removeClass("fa-2x");
		$(".fa").removeClass("fa-3x");
	}
}

function hideScrollbar() {
	$("#doctorsList").niceScroll();
	$("#doctorsList").getNiceScroll().hide();
}

//TODO: Something to hide non full-visible doctors in doctorsList