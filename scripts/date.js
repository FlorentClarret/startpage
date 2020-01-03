setInterval(updateDateAndTime, 100);

function updateDateAndTime() {
  var date = new Date();
  document.getElementById("date").innerHTML = date.toLocaleDateString("fr-FR", {timeZone: "Europe/Paris"});
  document.getElementById("time").innerHTML = date.toLocaleTimeString("fr-FR", {timeZone: "Europe/Paris"});
}
