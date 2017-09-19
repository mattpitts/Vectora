import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftPanel from './LeftPanel';

import ArtBoard from './ArtBoard';
import RightPanel from './RightPanel'
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProjects from './UserProjects';
import NewProject from './NewProject';
import CodeModal from './CodeModal';

import * as layoutActions from '../actions/layoutActions';

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
				{this.props.layout.modal === 'code' && <CodeModal/>}
				{this.props.layout.modal !== 'none' &&
					<div
						className='modal-hide-clicker'
						onClick={() => this.props.actions.hideModal()}>
					</div>
				}
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
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(layoutActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
