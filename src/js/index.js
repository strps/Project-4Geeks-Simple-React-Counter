//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

//Initial counter state
var data = [];
var intervalId;



//TODO: when the count down starts changes the inputTime value to 0 but it does not update the timeAlert number input value, this must be fixed.


//Event handlers exposed to the counter compnent
const handlers = {
  reset() {
    data.count = 0;
    data.direction = 1;
    data.alert = false;
    data.alertTime = 0;
    data.countdown = 10;
    render();
    start()
  },

  toggleCounting() {
    // data.running = data.running ? false : true;
    if (data.isRunning) {
      stop();
    } else {
      start();
    }
    render();
  },

  setCountdown(event) {
    data.countdown = event.target.value;
  },

  startCountdown() {
    data.count = parseInt(data.countdown)+1;
    data.direction = -1;
    data.alertTime = 0;
    data.alert = true;
    start()
  },

  setAlert(event) {
    data.alertTime = event.target.value;
  },

  alert() {
    data.alert = data.alert ? false : true;
    render();
  },

  setBackwardCounting() {
    data.direction = -1;
    render();
  },

  setForwardCounting() {
    data.direction = 1;
    render();
  },
};

function render() {
  ReactDOM.render(
    <Home handlers={handlers} data={data} />,
    document.querySelector("#app")
  );
}

function count() {
  data.count += data.direction;

  render();

  if (data.count == data.alertTime && data.alert) {
    handlers.toggleCounting();
    data.alert = false;
    window.alert("Alarm! " + data.count + " Time Reached");
  }
}
function start() {
  clearInterval(intervalId);
  intervalId = setInterval(count, 1000);
  data.isRunning = true;
}

function stop() {
  clearInterval(intervalId);
  data.isRunning = false;
}

handlers.reset();
