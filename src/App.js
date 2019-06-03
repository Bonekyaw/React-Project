import React from 'react';
import Hello from './Hello';

function App() {
  return (
  	<div >
	    <h1> This is App Component </h1>
	    <div className="appExtra">
		    <Hello/>
		    <Hello/>
		    <Hello/>
		    <Hello/>
	    </div>

  	</div>
  );
}

export default App;
