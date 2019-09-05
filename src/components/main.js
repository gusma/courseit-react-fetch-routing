import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

import logoGrande from "../images/logo_grande.png";

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper-ppal">
				<div className="left">
					<img src={logoGrande} alt="Logo grande" />
				</div>
				<div className="right">
					<ul>
						<li>
							<Link to="/carousel/MLA">Argentina</Link>
						</li>
						<li>
							<Link to="/carousel/MBO">Bolivia</Link>
						</li>
						<li>
							<Link to="/carousel/MLB">Brazil</Link>
						</li>
						<li>
							<Link to="/carousel/MCO">Colombia</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Main;
