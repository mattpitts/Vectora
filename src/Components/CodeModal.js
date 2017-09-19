import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as layoutActions from '../actions/layoutActions';
import getSVGCode from '../scripts/getSVGCode';

class CodeModal extends React.Component {

	componentDidMount() {
		let code = getSVGCode(this.props.shapes.shapes)
	}
	render() {
		return (
			<div className="CodeModal">
				<textarea className="codeTextarea" value={getSVGCode(this.props.shapes.shapes)}/>
			</div>

		)
	}
}


function mapStateToProps(state, ownProps) {
	return {
		shapes: state.shapes
	}
}
function mapDispatchToProps(dispatch) {
	return {
		layoutActions: bindActionCreators(layoutActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CodeModal);
