bg();

function bg() {
	var imgNumber = 5;
	var randomNumber = Math.floor(Math.random() * imgNumber);
	
	var bgImg = new Image();
	bgImg.src = `images/${randomNumber + 1}.jpg`;

	document.body.appendChild(bgImg);
	$('img').addClass('bgImage');
}

