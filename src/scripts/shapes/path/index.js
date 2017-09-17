const path = {
	create(x, y, props) {
		return {
			type: 'path',
			selected: true,
			d: `M ${x} ${y}`,
			fill: 'none',
			stroke: 'grey',
			strokeWidth: 8,
			boundingBox: {
				xMin: x,
				xMax: x,
				yMin: y,
				yMax: y
			}
		}
	},
	update(x, y, path) {
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
		return {...path, d: newD}
	},
	style(props) {
		console.log('style');
	}
};


export default path;
