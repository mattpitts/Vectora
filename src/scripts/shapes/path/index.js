const path = {
	create(x, y, props) {
		return {
			type: 'path',
			d: `M ${x} ${y}`,
			fill: props.fill,
			stroke: props.stroke,
			strokeWidth: props.strokeWidth
		}
	},
	update(x, y, path) {
		let newD = `${path.d} L ${x} ${y}`;
		return {...path, d: newD}
	},
	style(props) {
		console.log('style');
	}
};


export default path;
