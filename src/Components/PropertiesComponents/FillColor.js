import React from 'react';
import { SketchPicker } from 'react-color';

const FillColor = (props) => {
	return (
		<div>
			<p>Fills</p>
			<SketchPicker
				width={'12vw'}
				onChange={props.selectFillColor}
			/>
		</div>
	)
}
export default FillColor;
