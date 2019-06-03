import React from 'react';
import Hello from './Hello';

function App() {
  return (
  	<div >
	    <h1> This is App Component </h1>
	    <div className="appExtra">
		    <Hello name="Bone Kyaw"/>
		    <Hello name="Moe Moe"/>
		    <Hello name="Phone Nyo"/>
		    <Hello name="Moe Ma Ka"/>
	    </div>

  	</div>
  );
}

export default App;
