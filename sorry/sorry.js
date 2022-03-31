function randomTile(){
	return "url(sorry/tile" + Math.floor(Math.random() * 10).toString() + ".jpg";
}

function randomParticle(){
	return "sorry/p" + Math.floor(Math.random() * 20).toString() + ".png";
}

$(document).ready(function(){
	setInterval(function(){
		$("#body-index").css("background-size", (Math.random() * 500 + 10).toString() + "px " + (Math.random() * 500 + 10).toString() + "px");
		var randTimeX = (Math.random() * 15).toString();
		var randTimeY = (Math.random() * 15).toString();
		var newElement = "<div class='x' style='animation: x " + randTimeX + "s linear infinite calc(-" + randTimeX + "s - (-" + randTimeX + "s * " + Math.random().toString() + "))'><img class='particle y' src='" + randomParticle() + "' data-lifespan='" + ((new Date().getTime()) + Math.floor(Math.random() * 20000) + 10000).toString() + "' style='animation: y " + randTimeY + "s linear infinite calc(-" + randTimeY + "s - (-" + randTimeY + "s * " + Math.random().toString() + "))'></div>";
		$("body").prepend(newElement);
		for(var i = 0; i < $(".particle").length; i++){
			if(parseInt($(".particle").eq(i).attr("data-lifespan")) < (new Date().getTime())){
				$(".particle").eq(i).remove();
			};
		};
	}, 500);

	$(".bigbtn").hover(function(){
		$(this).css("background-image", randomTile());
	});

	for(i = 0; i < $(".bigbtn").length; i++){
		$(".bigbtn").eq(i).css("top", (Math.random() * 100 - 50).toString() + "px");
		$(".bigbtn").eq(i).css("left", (Math.random() * 100 - 50).toString() + "px");
		$(".bigbtn").eq(i).css("animation-delay", "calc(-3s - (-3s * " + Math.random().toString() + "))");
	}
	var overlay = "<div id='rainbow' style='width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 99999; pointer-events: none; background-color: red; opacity: 0.20'></div>";
	$("body").prepend(overlay);
});
