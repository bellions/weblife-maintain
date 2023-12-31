/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

/*** Countdown Timer */
$("#days").countdown("2023/12/1", function (event) {
  $(this).html(event.strftime("%D <em>days</em>"));
});

$("#hours").countdown("2023/12/1", function (event) {
  $(this).html(event.strftime("%H <em>hours</em>"));
});

$("#minutes").countdown("2023/12/1", function (event) {
  $(this).html(event.strftime("%M <em>minutes</em>"));
});

$("#seconds").countdown("2023/12/1", function (event) {
  $(this).html(event.strftime("%S <em>seconds</em>"));
});
