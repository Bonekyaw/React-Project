import React from 'react';
import './App.css';

function Hello(props) {
	const counting = () => {
		console.log("Hello React");
	}

	return (
		<div className="hello"> 
			<p>{props.name}</p>
			<button onClick={counting}>Hello</button>

		</div>
	);
}
export default Hello;