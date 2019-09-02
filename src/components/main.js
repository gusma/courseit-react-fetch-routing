import React from "react";
import { Link } from "react-router-dom";

import logoGrande from "../images/logo_grande.png";

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="left">
					<img src={logoGrande} alt="Logo grande" />
				</div>
				<div className="right">
					<Link to="/MLA">Argentina</Link>
					<Link to="/MBO">Brazil</Link>
					<Link to="/MLB">Chile</Link>
					<Link to="/MCO">Colombia</Link>
				</div>
			</div>
		);
	}
}

export default Main;
