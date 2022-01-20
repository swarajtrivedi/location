var latitude; //to get the latitude
var longitude; //to get the longitude
var latlongvalue; //to specify the coordinates in img
var x = document.getElementById('location');// to fetch the element with id="location"
function getLocation() //to fetch location
{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		document.getElementById('location').innerHTML = 'Browser Does not Support';
	}
}
var latitude; //to get the latitude
var longitude; //to get the longitude
var latlongvalue; //to specify the coordinates in img
var x; // to fetch the element with id="location"
function showPosition(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	latlongvalue = position.coords.latitude + ',' + position.coords.longitude;
	img_url =
		'https://maps.googleapis.com/maps/api/staticmap?center=' +
		latlongvalue +
		'&zoom=17&size=500x300&key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o';
	document.getElementById('mapholder').innerHTML = "<img src='" + img_url + "'>";
	x = 'Latitude: ' + position.coords.latitude + ', ' + '<br>Longitude: ' + position.coords.longitude;
	document.getElementById('location').innerHTML = x;
}
