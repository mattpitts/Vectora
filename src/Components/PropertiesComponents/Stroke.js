import React from 'react';
import { SketchPicker } from 'react-color';

class Stroke extends React.Component {
	constructor(props) {
		super(props);
		this.updateStrokeColor = this.updateStrokeColor.bind(this);
		this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
	}

	updateStrokeColor(color) {
		let rgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		this.props.onPropertyChange('stroke', rgba);
		this.forceUpdate();
	}

	onCheckBoxChange(event) {
		if(event.target.checked) {
			this.props.onPropertyChange('stroke', 'gray')
		} else {
			this.props.onPropertyChange('stroke', 'none')
		}
	}
	render() {
		let value = this.props.stroke == 'none' ? false : true;
		return (
			<div>
				<div className='PropertyHeader'>
					<h4>Stroke</h4>
					<input type='checkbox' checked={value} onChange={(event) => this.onCheckBoxChange(event)}></input>
				</div>
				{this.props.stroke !== 'none' && <SketchPicker
					key={1}
					color={this.props.stroke}
					onChange={this.updateStrokeColor}
					width={'12vw'}
				/>}
			</div>
		)
	}
}

export default Stroke;
