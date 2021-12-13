let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let miliseconds = document.querySelector(".miliseconds");
let startStop = 0;
let interval, sethours, setminutes, setseconds, setmiliseconds;
let [localhrs, localminutes, localseconds, localmilliseconds] = [0, 0, 0, 0];

function setTime() {
  document.querySelector(".setForm").style.display = "block";
}

function start() {
  interval = setInterval(display, 10);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  localhrs = 0;
  localminutes = 0;
  localseconds = 0;
  localmilliseconds = 0;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  miliseconds.innerHTML = "000";
}

function set(event) {
  event.preventDefault();
  sethours = document.querySelector(".setHours").value;
  setminutes = document.querySelector(".setminutes").value;
  setseconds = document.querySelector(".setseconds").value;
  setmiliseconds = document.querySelector(".setMiliseconds").value;
}

function display() {
  if (
    sethours == localhrs &&
    setminutes == localminutes &&
    setseconds == localseconds &&
    setmiliseconds == localmilliseconds
  ) {
    clearInterval(interval);
    alert("Done");
  } else {
    localmilliseconds += 10;
    if (localmilliseconds == 1000) {
      localmilliseconds = 0;
      localseconds++;
      if (localseconds == 60) {
        localseconds = 0;
        localminutes++;
        if (localminutes == 60) {
          localminutes = 0;
          localhrs++;
        }
      }
    }
    hours.innerHTML = localhrs;

    minutes.innerHTML = localminutes;

    seconds.innerHTML = localseconds;

    miliseconds.innerHTML = localmilliseconds;
  }
}
