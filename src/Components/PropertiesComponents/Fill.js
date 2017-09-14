import React from 'react';
import { SketchPicker } from 'react-color';

class Fill extends React.Component {
	constructor(props) {
		super(props);
		this.updateFillProperty = this.updateFillProperty.bind(this);
		this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
	}

	updateFillProperty(color) {
		let rgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
		this.props.onPropertyChange('fill', rgba)
	}
	onCheckBoxChange(event) {
		if(event.target.checked) {
			this.props.onPropertyChange('fill', 'gray')
		} else {
			this.props.onPropertyChange('fill', 'none')
		}
	}
	render() {
		let value = this.props.fill == 'none' ? false : true;
		return (
			<div>
				<div className='PropertyHeader'>
					<h4>Fill</h4>
					<input type='checkbox' checked={value} onChange={(event) => this.onCheckBoxChange(event)}></input>
				</div>
				{this.props.fill !== 'none' && <SketchPicker
					key={1}
					color={this.props.fill}
					onChange={this.updateFillProperty}
					width={'12.5vw'}
				/>}
			</div>
		)
	}
}
export default Fill;
