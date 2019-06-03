import React from 'react';
import './App.css';

function Hello() {
	const counting = () => {
		console.log("Hello React");
	}

	return (
		<div className="hello"> 
			<p>This is Hello Component</p>
			<button onClick={counting}>Hello</button>

		</div>
	);
}
export default Hello;