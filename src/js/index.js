//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

//Initial counter state
var data = {
  count: 0,
  direction: 1,
  running: true,
  alertTime: 0,
  alert: false,
  countdown: 0,
};

//Event handlers for the counter controls TODO naming convention please XD
const handlers = {
  reset() {
    data.count = 0;
    data.direction = 1;
    data.running = true;
    data.alert = false;
    data.alertTime = 0;
    data.countdown = 0;
  },

  toggleRunning() {
    data.running = data.running ? false : true;
    render()
  },

  setCountdown(event) {
    data.countdown = event.target.value;
  },

  countdown() {
    data.count = parseInt(data.countdown);
    data.direction = -1;
    data.alert = true;
    data.alertTime = 0;
    data.running = true;
    render()
  },

  setAlert(event) {
    data.alertTime = event.target.value;
  },

  alert() {
    data.alert = data.alert ? false : true;
    render()
  },

  setBackward() {
    data.direction = -1;
    render()
  },

  setForward() {
    data.direction = 1;
    render()
  },
};

function render() {
  ReactDOM.render(
    <Home handlers={handlers} data={data} />,
    document.querySelector("#app")
  );
}

setInterval(() => {
  
  if (data.count == data.alertTime && data.alert) {
    data.running = false;
    data.alert = false;
    window.alert("Alarm! " + data.count + " Time Reached");
  }
  
  data.count += data.running ? data.direction : 0;

  render();

}, 1000);
