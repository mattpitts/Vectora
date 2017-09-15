import React from 'react';
import initKeyboardEventListeners from '../scripts/keyboardEventListeners';


class KeyboardControls extends React.Component {
	constructor(props) {
		super(props)
		this.translateKeycode = this.translateKeycode.bind(this);
	}

	componentDidMount() {
		initKeyboardEventListeners(this.props.actions);
	}
	translateKeycode(code) {
	}
	render() {
		return(
			<div></div>
		)
	}
}

export default KeyboardControls;
