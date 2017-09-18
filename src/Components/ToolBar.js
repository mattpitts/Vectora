import React from 'react';
import { connect } from 'react-redux';
import * as toolbarActions from '../actions/toolbarActions';
const tools = [
	'path',
	'circle',
	'rect'
]
const toolNames = [
	'Draw',
	'Circle',
	'Rectangle'
]
class ToolBar extends React.Component {
	render() {
		console.log(this.props.tool);
		const toolList = tools.map((tool, i) => {
			let classString = 'tool-odd';
			if(i === 0 || i % 2 === 0) {
				classString = 'tool-even';
			}
			if(this.props.tool === tool) {
				return (
					<li>
						<p
							className={`${classString} tool-selected`}
							onClick={() => this.props.selectTool(tools[i])}>
							{toolNames[i]}
						</p>
					</li>
				)
			} else {
				return (
					<li>
						<p
							className={classString}
							onClick={() => this.props.selectTool(tools[i])}>
							{toolNames[i]}
						</p>
					</li>
				)
			}
		})

		return(
			<div className="toolbar-container">
				<div className='PropertyHeader'>
					<h4>Tools</h4>
				</div>
				<ul>
					{toolList}
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
