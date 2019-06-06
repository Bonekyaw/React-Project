import React, {Component} from 'react';
import './App.css';
class App extends Component {
	render(){
		return (
			<TodoList />
			)
	}
}
class TodoList extends Component {
	constructor(){
		super();
		this.state = {
			items : [
				{name : "Bone Kyaw", status: 1},
				{name : "Moe Moe", status: 0},
				{name : "Phone Nyo", status: 0},
				{name : "Moe Ma Ka", status: 0},
			]
		}
		this.toggle = this.toggle.bind(this);
		this.remove = this.remove.bind(this);

	}
	toggle(index){
		var items = this.state.items;
		items[index].status = !items[index].status;
		this.setState({items})
	}
	remove(index){
		var items = this.state.items;
		delete items[index];
		this.setState({items})
	}
	render(){
		var self = this;
		return (
			<ul>
				{this.state.items.map(
					function(item,index){
						return (
							<TodoItem 
								name={item.name} 
								status={item.status} 
								key={index} 
								toggle={self.toggle}
								remove={self.remove} 
								id={index}
							 />
								
						)
					})
				}
			</ul>
			)
	}
}
class TodoItem extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleChange(){
		this.props.toggle(this.props.id)
	}
	handleDelete(){
		this.props.remove(this.props.id);
	}
	render(){
		return (
			<li>
				<input type="checkbox" checked={this.props.status} onChange={this.handleChange}/>
				 {this.props.status ? (<s>{this.props.name}</s>) : (this.props.name) }
				 <a href="#" onClick={this.handleDelete}>&times;</a> 
			 </li>
			)
	}
}
export default App;