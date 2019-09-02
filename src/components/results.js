import React from "react";

const Resultados = props => {
	const options = this.state.results.map(r => <li>{r.site_id}</li>);
	return <ul>{options}</ul>;
};

export default Resultados;
