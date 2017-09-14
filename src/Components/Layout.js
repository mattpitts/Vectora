import React from 'react';

import LeftPanel from './LeftPanel';

import ArtBoard from './ArtBoard';
import RightPanel from './RightPanel'


const Layout = () => {
	return (
		<div className="Layout">
			<LeftPanel/>
			<ArtBoard/>
			<RightPanel/>
		</div>
	)
}

export default Layout;
