import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
	return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					{"Some quick example text to build on the card title and make up the bulk of the card's content."}
				</p>
				<Link to={`/single/${item.id}`} className="btn btn-primary">
					{"ver detalle"}
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object
};
