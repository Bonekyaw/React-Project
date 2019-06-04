import React,{useState} from 'react';
import Hello from './Hello';

function App() {

	const [isRed, setRed] = useState(false);
	const [count, setCount] = useState(0);

	const [users,setUsers] = useState([
			{name:"Bone Kyaw", message:"Hey I am fine"},
			{name:"Moe Moe", message:"Now I am cooking"},
			{name:"Sithu ", message:"Hey I am learning"}
		]);

	const increment = () => {
			setCount(count + 1);
			setRed(!isRed);
		};

  return (
  	<div >
	    <h1 className={isRed ? 'red' : ''}> This is App Component {count}</h1>
	    <button onClick={increment}> Increment </button>
	    <div className="appExtra">
		    {users.map( user => (
		    	<Hello name={user.name} message={user.message} />
		    ))}
	    </div>

  	</div>
  );
}

export default App;
