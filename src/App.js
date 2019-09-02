import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Carousel from "./components/carousel";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<Router>
					<Route path="/" exact component={Main} />
					<Route path="/:id/" component={Carousel} />
				</Router>
			</div>
		);
	}
}

export default App;
