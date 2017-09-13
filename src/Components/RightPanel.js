import React from 'react';
import ShapeList from './ShapeList';
import Properties from './Properties';

const RightPanel = (props) => {
	return (
		<div className={'RightPanel'}>
			<ShapeList/>
			<Properties/>
		</div>
	)
}
export default RightPanel;
