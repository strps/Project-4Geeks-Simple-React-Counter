import React from "react";

//include images into your bundle
import Counter from "./counter.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Counter seconds={123}/>
		</div>
	);
};

export default Home;
