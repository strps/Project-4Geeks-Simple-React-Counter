import React from "react";

//include images into your bundle
import Counter from "./counter.jsx"
import CounterControls from "./controls.jsx"

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<Counter seconds={props.seconds}/>
			<CounterControls/>
		</div>
	);
};

export default Home;
