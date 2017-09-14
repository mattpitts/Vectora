import React from 'react'
import ToolBar from './ToolBar';
import ShapeList from './ShapeList';

const LeftPanel = (props) => {
	return (
		<div className={"LeftPanel"}>
			<ToolBar/>
			<ShapeList/>
		</div>
	)
}
export default LeftPanel;
