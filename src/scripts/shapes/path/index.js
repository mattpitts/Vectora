const path = {
	create(x, y, props) {
		x -= window.innerWidth * 0.1;
		return {
			type: 'path',
			selected: true,
			d: `M ${x} ${y}`,
			fill: 'none',
			stroke: 'grey',
			strokeWidth: 8,
			translate: '',
			scale: '',
			boundingBox: {
				xMin: x,
				xMax: x,
				yMin: y,
				yMax: y
			}
		}
	},
	update(x, y, path) {
		x -= window.innerWidth * 0.1;
		if(x < path.boundingBox.xMin) {
			path.boundingBox.xMin = x;
		}
		if(x > path.boundingBox.xMax) {
			path.boundingBox.xMax = x;
		}
		if(y < path.boundingBox.yMin) {
			path.boundingBox.yMin = y;
		}
		if(y > path.boundingBox.yMax) {
			path.boundingBox.yMax = y;
		}
		let newD = `${path.d} L ${x} ${y}`;
		path.minX = path.boundingBox.xMin;
		path.minY = path.boundingBox.yMin;
		path.originalBounds = {...path.boundingBox}
		return {...path, d: newD}
	},
	style(props) {
		console.log('style');
	}
};


export default path;
