//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home seconds = {0}/>, document.querySelector("#app"))

let count = 0
setInterval(()=>{
    count++
    ReactDOM.render(<Home seconds = {count}/>, document.querySelector("#app"))
},1000)
