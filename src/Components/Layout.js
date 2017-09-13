import React from 'react';

import ToolBar from './ToolBar';
import ArtBoard from './ArtBoard';
import RightPanel from './RightPanel'

const Layout = () => {
	return (
		<div className="Layout">
			<ToolBar/>
			<ArtBoard/>
			<RightPanel/>
		</div>
	)
}

export default Layout;
