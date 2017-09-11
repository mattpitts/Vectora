const rect = {
	create(x, y, props) {
		return {
			type: 'rect',
			x: x,
			y: y,
			width: 0,
			height: 0,
			rx: props.rx,
			ry: props.ry,
			fill: props.fill
		}
	},
	update(x, y, rect) {
		let newRect = rect;
		if(x < rect.x) {
			newRect.width = rect.width + rect.x - x;
			newRect.x = x;
		} else if(x > rect.x){
			newRect.width = x - rect.x;
		}
		if(y < rect.y) {
			newRect.height = rect.height + rect.y - y;
			newRect.y = y;
		} else if(y > rect.y){
			newRect.height = y - rect.y;
		}
		return newRect;
	},
	style(props) {
		console.log(props);
	}
};

export default rect;
