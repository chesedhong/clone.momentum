loadName();

function loadName() {
	var yourName = localStorage.getItem("name");

	if(yourName === null) {
		$('#send').on('click', firstGreeting);
	} else {
		showGreeting(yourName);
	}
}

function firstGreeting(event) {
	var userName = $('.name').val();
	saveName(userName);
}

function saveName(userName) {
	localStorage.setItem("name", userName);

	var yourName = localStorage.getItem("name");
	showGreeting(yourName);
}

function showGreeting(name) {
	var current = new Date();
	var hour = current.getHours();

	if(hour >= 5 && hour < 12) {
		$('.showGreeting').text("Good Morning," + name);
		$('.name').addClass('close');
		$('#send').addClass('close');
	} else if (hour >= 12 && hour < 17) {
		$('.showGreeting').text("Good Afternoon," + name);
		$('.name').addClass('close');
		$('#send').addClass('close');
	} else {
		$('.showGreeting').text("Good Evening," + name);
		$('.name').addClass('close');
		$('#send').addClass('close');	
	}
}