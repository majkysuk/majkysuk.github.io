// weather.js
//var city = document.getElementById("city");
//city.addEventListener("change", function() {

	var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
	var API_KEY = "d75da5829ee2244d5a25bbb10c1a7318";
	var FULL_URL = URL + "705392" + "&APPID=" + API_KEY;

	var XHR = new XMLHttpRequest();
	XHR.open("GET", FULL_URL, true);
	XHR.send();

	XHR.onreadystatechange = function() {
		if ((XHR.readyState === 4) && (XHR.status === 200)) {
			var weather = document.getElementById("weather");
			weather.innerHTML = "";
			var data = JSON.parse(XHR.responseText);
			var ul = document.createElement("ul");
			var li = document.createElement("li");
			li.innerHTML = "<span>Temperature: " + (data.main.temp - 273.15) + "<sup>0</sup>C</span>";
			ul.appendChild(li);

			li = document.createElement("li");
			li.innerHTML = "<span>Humidity: " + data.main.humidity + " %</span>";
			ul.appendChild(li);

			weather.appendChild(ul);
		}
	};


	
//}, false);
