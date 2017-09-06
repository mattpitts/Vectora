import React, { Component } from 'react';
import './App.css';
import ArtBoard from './Components/ArtBoard';
import project from './TestProject';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			project,
			selectedShape: 'path'
		}
	}
  	render() {
	  	console.log(project);
	    return (
	      	<div className="App">
		  		<ArtBoard
					shapes={this.state.project.shapes}
				/>
	      	</div>
	    );
  	}
}

export default App;
