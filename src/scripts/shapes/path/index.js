const path = {
	create(x, y, props) {
		x -= window.innerWidth * 0.1;
		return {
			type: 'path',
			d: `M ${x} ${y}`,
			fill: props.fill,
			stroke: props.stroke,
			strokeWidth: props.strokeWidth
		}
	},
	update(x, y, path) {
		x -= window.innerWidth * 0.1;
		let newD = `${path.d} L ${x} ${y}`;
		return {...path, d: newD}
	},
	style(props) {
		console.log('style');
	}
};


export default path;
