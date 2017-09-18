import React from 'react';
import { connect } from 'react-redux';
import LeftPanel from './LeftPanel';

import ArtBoard from './ArtBoard';
import RightPanel from './RightPanel'
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProjects from './UserProjects';
import NewProject from './NewProject';


class Layout extends React.Component {

	render() {
		let blur = '';
		if(this.props.layout.modal !== 'none') {
			blur = "modal-blur-background";
		}

		return (
			<div className="Layout">
				<div className={blur}>
					<LeftPanel/>
					<ArtBoard/>
					<RightPanel/>
				</div>
				{this.props.layout.modal === 'login' && <LogIn/>}
				{this.props.layout.modal === 'signup' && <SignUp/>}
				{this.props.layout.modal === 'projects' && <UserProjects/>}
				{this.props.layout.modal === 'newProject' && <NewProject/>}
			</div>
		)
	}
}


function mapStateToProps(state, ownProps) {
	return {
		layout: state.layout,
		shapes: state.shapes
	}
}
export default connect(mapStateToProps)(Layout);
