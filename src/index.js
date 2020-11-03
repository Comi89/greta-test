function renderPM10Value(data, city) {
  dataSection.innerHTML =
    "<span class='air_pollution-city'> pm10 value: </span><span class='air_pollution-value'></span>";
  var citySection = document.querySelector(".air_pollution-city");
  var valueSection = document.querySelector(".air_pollution-value");
  citySection.prepend(city);
  valueSection.append(data.value + " " + data.unit);
}

function fetchPollutionData(city) {
  dataSection.append("Loading...");
  fetch("https://api.openaq.org/v1/measurements?parameter=pm10&city=" + city)
    .then(function (response) {
      return response.json();
    })
    .then(function (value) {
      renderPM10Value(value.results[0], city);
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
}

var dataSection = document.querySelector(".air_pollution-section");

fetchPollutionData("Porto");
