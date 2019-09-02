import React from "react";
import axios from "axios";
import logomeli from "../images/logo_apaisado.png";
import "./carousel.css";

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
				<header>
					<div className="left">
						<img
							src="https://http2.mlstatic.com/ui/navigation/4.5.3/mercadolibre/logo__large_plus.png"
							alt="Logo MercadoLibre"
						/>
						<form>
							<input
								placeholder="Search for..."
								ref={input => (this.search = input)}
								onChange={this.handleInputChange}
								placeholder="camisetas de futbol"
							/>
						</form>
					</div>
					<div className="right">
						<img src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-86b2b844-4c2d-4b7c-8649-4fef867e0b9d.png" />
					</div>
				</header>
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
