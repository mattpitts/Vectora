import React from 'react';
import { SketchPicker } from 'react-color';

class Fill extends React.Component {
	constructor(props) {
		super(props);
		this.updateFillProperty = this.updateFillProperty.bind(this);
	}

	updateFillProperty(color) {
		let rgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
		this.props.onPropertyChange('fill', rgba)
	}
	render() {
		return (
			<div>
				<SketchPicker
					color={this.props.fill}
					onChange={this.updateFillProperty}
					width={'12vw'}
				/>
			</div>
		)
	}
}
export default Fill;
