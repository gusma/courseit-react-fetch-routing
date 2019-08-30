import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Index from "./components/index";
import Articles from "./components/articles";
import Article from "./components/article";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Router>
					<div>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/articles/">Articles</Link>
								</li>
								<li>
									<Link to="/article/">Single Article</Link>
								</li>
							</ul>
						</nav>

						<Route path="/" exact component={Index} />
						<Route path="/articles/" component={Articles} />
						<Route path="/article/" component={Article} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
