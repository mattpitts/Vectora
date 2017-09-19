import React from 'react';

class Text extends React.Component {
	render() {
		return (
			<text
				x={this.props.x}
				y={this.props.y}
				fontSize={this.props.fontSize}
				fontFamily={this.props.fontFamily}
				fill={this.props.fill}
				stroke={this.props.stroke}>
				{this.props.content}
			</text>
		)
	}
}
export default Text;
