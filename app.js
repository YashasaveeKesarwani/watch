let h = document.querySelector(".h");
let minutes = document.querySelector(".minutes");
let sec = document.querySelector(".sec");
let milisec = document.querySelector(".milisec");
let startStop = 0;
let interval, seth, setminutes, setsec, setmilisec;
let [localhrs, localminutes, localsec, localmillisec] = [0, 0, 0, 0];

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
  localsec = 0;
  localmillisec = 0;
  h.innerHTML = "00";
  minutes.innerHTML = "00";
  sec.innerHTML = "00";
  milisec.innerHTML = "000";
}

function set(event) {
  event.preventDefault();
  seth = document.querySelector(".seth").value;
  setminutes = document.querySelector(".setminutes").value;
  setsec = document.querySelector(".setsec").value;
  setmilisec = document.querySelector(".setMilisec").value;
}

function display() {
  if (
    seth == localhrs &&
    setminutes == localminutes &&
    setsec == localsec &&
    setmilisec == localmillisec
  ) {
    clearInterval(interval);
    alert("Done");
  } else {
    localmillisec += 10;
    if (localmillisec == 1000) {
      localmillisec = 0;
      localsec++;
      if (localsec == 60) {
        localsec = 0;
        localminutes++;
        if (localminutes == 60) {
          localminutes = 0;
          localhrs++;
        }
      }
    }
    h.innerHTML = localhrs;

    minutes.innerHTML = localminutes;

    sec.innerHTML = localsec;

    milisec.innerHTML = localmillisec;
  }
}
