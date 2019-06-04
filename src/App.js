import React,{useState} from 'react';
import Hello from './Hello';

function App() {

	const [users,setUsers] = useState([
			{name:"Bone Kyaw", message:"Hey I am fine"},
			{name:"Moe Moe", message:"Now I am cooking"},
			{name:"Sithu ", message:"Hey I am learning"}
		]);



  return (
  	<div >
	    <h1> This is App Component </h1>
	    <div className="appExtra">
		    {users.map( user => (
		    	<Hello name={user.name} message={user.message} />
		    ))}
	    </div>

  	</div>
  );
}

export default App;
