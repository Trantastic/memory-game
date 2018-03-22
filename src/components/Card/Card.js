import React from 'react';
import './Card.css';

const Card = props => (
	<div className="card d-inline-block" onClick={props.click}>
		<img id={props.id} alt={props.name} src={props.image} />
	</div>
);

export default Card;