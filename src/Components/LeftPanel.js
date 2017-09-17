import React from 'react'
import ToolBar from './ToolBar';
import ShapeList from './ShapeList';
import ProjectMenu from './ProjectMenu';

const LeftPanel = (props) => {
	return (
		<div className={"LeftPanel"}>
			<ToolBar/>
			<ShapeList/>
			<ProjectMenu/>
		</div>
	)
}
export default LeftPanel;
