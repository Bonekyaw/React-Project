import React from 'react';

function Hello() {
	const counting = () => {
		console.log("Hello React");
	}

	return (
		<div> 
			<p>This is Hello Component</p>
			<button onClick={counting}>Hello</button>

		</div>
	);
}
export default Hello;