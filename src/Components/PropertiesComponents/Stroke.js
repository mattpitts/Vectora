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
				{this.props.stroke !== 'none' &&
					<div>
						<div className={'StrokeForm'}>
							<form>
								<label className={'StrokeWidthInputLabel'}htmlFor={'StrokeWidthInput'}>Width:</label>
								<input
									id={'StrokeWidthInput'}
									className={'StrokeWidthInput'}
									type='number'
									value={this.props.strokeWidth}
									onChange={(event) => this.props.onPropertyChange('strokeWidth', event.target.value)}
									onFocus={() => this.props.toggleShapeDeletePermission(false)}
									onBlur={() => this.props.toggleShapeDeletePermission(true)}>
								</input>
							</form>
						</div>

						<SketchPicker
							key={1}
							color={this.props.stroke}
							onChange={this.updateStrokeColor}
							width={'12.5vw'}
							/>
					</div>
				}
			</div>
		)
	}
}

export default Stroke;
