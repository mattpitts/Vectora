import React from 'react';
import { SketchPicker } from 'react-color';

class Stroke extends React.Component {
	constructor(props) {
		super(props);
		this.updateStrokeColor = this.updateStrokeColor.bind(this);
	}

	updateStrokeColor(color) {
		let rgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		this.props.onPropertyChange('stroke', rgba);
		this.forceUpdate();
	}
	render() {
		return (
			<div>
				<SketchPicker
					key={2}
					color={this.props.stroke}
					onChange={this.updateStrokeColor}
					width={'12vw'}
				/>
			</div>
		)
	}
}

export default Stroke;
