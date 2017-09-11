import React, { Component } from 'react';
import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Layout from './Components/Layout';

const store = configureStore();

class App extends Component {
  	render() {
	    return (
			<Provider store={store}>
				<Layout/>
			</Provider>
	    );
  	}
}

export default App;
