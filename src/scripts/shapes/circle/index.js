const circle = {
	create(area, props) {
		let xWidth = area.xMax - area.xMin;
		let yWidth = area.yMax - area.yMin;
		let r = xWidth > yWidth ? yWidth / 2 : xWidth / 2;
		let boundingBox = {
			xMin: area.xMin,
			xMax: area.xMax,
			yMin: area.yMin,
			yMax: area.yMax
		}
		return {
			type: 'circle',
			cx: area.xMin + ((area.xMax - area.xMin) / 2),
			cy: area.yMin + ((area.yMax - area.yMin) / 2),
			r: r,
			stroke: props.stroke,
			strokeWidth: props.strokeWidth,
			fill: props.fill,
			boundingBox: boundingBox,
			selected: true
		}
	},
	update(area, circle) {
		let xWidth = area.xMax - area.xMin;
		let yWidth = area.yMax - area.yMin;
		let r = xWidth > yWidth ? yWidth / 2 : xWidth / 2;
		circle.r = r;
		circle.cx = area.xMin + ((area.xMax - area.xMin) / 2);
		circle.cy = area.yMin + ((area.yMax - area.yMin) / 2);
		circle.boundingBox = {
			xMin: circle.cx - r,
			xMax: circle.cx + r,
			yMin: circle.cy - r,
			yMax: circle.cy + r
		}
		return circle;
	},
	style(props) {

	}
};


export default circle;
