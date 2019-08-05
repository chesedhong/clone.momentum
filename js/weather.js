loadCoords();

function loadCoords() {
	var yourCoords = localStorage.getItem("coords");

	if (yourCoords === null) {
		findCoords();
	} else {
		const parsedCoords = JSON.parse(yourCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function findCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoSuccess(position) {
	
	var latitude = position.coords.latitude;
	
	var longitude = position.coords.longitude;
	
	var coordsObj = {
		latitude,
		longitude
	};

	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError() {
	console.log("cannot access geo location");
}

function saveCoords(coordsObj) {
	localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function getWeather(lat, lng) {
	var API_KEY = "51923d3a8e49952515b817ae938fed7a";
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
	
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		var temperature = json.main.temp;
		var place = json.name;
		$('#navbar').text(temperature + ' @ ' + place);
	})
	;
}