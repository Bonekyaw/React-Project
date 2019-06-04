import React, {Component} from 'react';
 
class App extends Component  {

	constructor(){
		super();
		this.state = {
			name: 'Bone Kyaw',
			age : 23,
		}
	}
	render() {
		return (
			<div> 
				<h1>Hello React</h1>
				<p>Name : {this.state.name}</p>
				<p>Age: {this.state.age}</p>
			</div>
			)
	}
}
export default App;