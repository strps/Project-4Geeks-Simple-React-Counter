import React from "react";

//include images into your bundle
import Counter from "./counter.jsx"

//create your first component
const Home = (props) => {
	return (
		<div className="counter-container">
			<Counter data={props.data} handlers={props.handlers}/>
		</div>
	);
};

export default Home;
