const ellipse = {
	create(area, props) {
		if(!area) {
			area = {
				xMin: 0,
				xMax: 0,
				yMin: 0,
				yMax: 0
			}
		}
		let xWidth = area.xMax - area.xMin;
		let yWidth = area.yMax - area.yMin;

		let boundingBox = {
			xMin: area.xMin,
			xMax: area.xMax,
			yMin: area.yMin,
			yMax: area.yMax
		}
		return {
			type: 'ellipse',
			cx: area.xMin + ((area.xMax - area.xMin) / 2),
			cy: area.yMin + ((area.yMax - area.yMin) / 2),
			rx: area.yMax - area.yMin,
			ry: area.yMax - area.yMin,
			stroke: 'none',
			strokeWidth: 8,
			fill: 'grey',
			boundingBox: boundingBox,
			selected: true
		}
	},
	update(area, ellipse) {
		let xWidth = area.xMax - area.xMin;
		let yWidth = area.yMax - area.yMin;
		ellipse.rx = xWidth / 2;
		ellipse.ry = yWidth / 2;
		ellipse.cx = area.xMin + ((area.xMax - area.xMin) / 2);
		ellipse.cy = area.yMin + ((area.yMax - area.yMin) / 2);
		ellipse.boundingBox = {
			...area
		}
		return ellipse;
	},
	style(props) {

	}
};


export default ellipse;
