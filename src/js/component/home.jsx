import React from "react";

//include images into your bundle
import Counter from "./counter.jsx"
import CounterControls from "./controls.jsx"

//create your first component
const Home = (props) => {
	return (
		<div className="counter-container">
			<Counter seconds={props.seconds}/>
			<CounterControls handlers={props.handlers} data={props.data}/>
		</div>
	);
};

export default Home;
