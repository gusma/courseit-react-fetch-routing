import React from "react";
import axios from "axios";
import "./article.css";

class Argentina extends React.Component {
	state = {
		query: "",
		results: [],
		id: null
	};

	getInfo = () => {
		axios
			.get(
				`https://api.mercadolibre.com/sites/MLA/search?q=${this.state.query}&limit=5`
			)
			.then(({ data }) => {
				// console.log(data.results);
				this.setState({
					results: data.results
				});
			});
	};
	handleInputChange = () => {
		this.setState(
			{
				query: this.search.value
			},
			() => {
				if (this.state.query && this.state.query.length > 1) {
					this.getInfo();
				}
			}
		);
	};

	render() {
		const { results } = this.state;

		return (
			<div>
				<form>
					<input
						placeholder="Search for..."
						ref={input => (this.search = input)}
						onChange={this.handleInputChange}
						placeholder="camisetas de futbol"
					/>
				</form>
				<ul className="articles">
					{results &&
						results.map(item => (
							<li key={item.id}>
								<img src={item.thumbnail} alt={item.title} />
								<p>{item.title}</p>
								<p>$ {item.price}</p>
							</li>
						))}
				</ul>{" "}
			</div>
		);
	}
}

export default Argentina;
