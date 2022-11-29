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
  alertTime: 10,
  alert: false,
};

//Event handlers for the counter controls
const handlers = {
  reset() {
    data.count = 0;
    data.direction = 1;
    data.running = true
    data.alert = false
    data.alertTime = 0
  },
  resume() {
    data.running = true;
  },
  play() {
    data.running = data.running ? false : true;
  },
  countdown(initialtime) {
    count = initialtime; // TODO: set the count according to the countdown input
    data.direction = -1;
  },
};
// This is repeated on set interval, this is not needed
//ReactDOM.render(<Home seconds={0} handlers={handlers} data={data}/>, document.querySelector("#app"));

setInterval(() => {
  ReactDOM.render(
    <Home seconds={data.count} handlers={handlers} data={data} />,
    document.querySelector("#app")
  );

  if (data.count == data.alertTime && data.alertActivated) {
    window.alert("Alarm! Time Reached");
  }

  data.count += data.running ? data.direction : 0;
}, 1000);
