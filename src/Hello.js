import React from 'react';
import './App.css';

function Hello(props) {

	return (
		<div className="hello"> 
			<h1> {props.name} </h1>
			<p> {props.message} </p>
		</div>
	);
}
export default Hello;