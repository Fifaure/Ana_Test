var clock = document.querySelector(".clock");

setInterval(function () {
  var date = new Date();
  clock.innerHTML =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}, 1000);
