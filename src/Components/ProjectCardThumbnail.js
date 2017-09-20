import React from 'react';

import shapeUtilities from '../scripts/shapes';

class ProjectCardThumbnail extends React.Component {

	componentDidMount() {
		console.log(window.innerWidth * .1868);
	}
	render() {
		let transform = (window.innerWidth * .1868) / (window.innerWidth * .78)
		let shapes = this.props.shapes.map((shape, i) => {
			return shapeUtilities.constructor(shape, i);
		});
		return (
			<div>
				<svg className='svg-thumbnail' ref='thumbnail'>
					<g transform={`scale(${transform})`}>
						{shapes}
					</g>

				</svg>

			</div>
		)
	}
}

export default ProjectCardThumbnail;
