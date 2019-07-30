//clock
showTime();
setInterval(showTime, 60000); //auto updated time

function showTime() {
	var current = new Date();
	var hour = current.getHours();
	var minute = current.getMinutes();

	if (hour < 10) {
		hour = '0' + hour;
	}

	if (minute < 10) {
		minute = '0' + minute;
	}

	$('.clock').text(hour + ':' + minute);
}

