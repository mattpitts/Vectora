import React from 'react';
import { connect } from 'react-redux';
import * as toolbarActions from '../actions/toolbarActions';

class ToolBar extends React.Component {
	render() {
		return(
			<div className="toolbar-container">
				<ul>
					<li>
						<p onClick={() => this.props.selectTool('select')}>Select</p>
					</li>
					<li>
						<p onClick={() => this.props.selectTool('path')}>Draw</p>
					</li>
					<li>
						<p onClick={() => this.props.selectTool('circle')}>Circle</p>
					</li>
					<li>
						<p onClick={() => this.props.selectTool('rect')}>Rectangle</p>
					</li>
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		tool: state.toolbar
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectTool: tool => dispatch(toolbarActions.selectTool(tool))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
