import React, {Component} from 'react';
 
class App extends Component  {
	render() {
		return (
			<div> 
				<h1>Hi My name is {this.props.name}</h1>
			</div>
			)
	}
}
class Hello extends Component {
	constructor(){
		super();
		this.state = {
			name : null
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.setState({name: e.target.value})
	}
	render() {
		return (
			<div>
				<App name={this.state.name}/>
				<input type="text" onKeyDown={this.handleChange}/>
			</div>
			)
	}
}
export default Hello;