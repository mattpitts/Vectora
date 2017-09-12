const rect = {
	create(area, props) {
		return {
			type: 'rect',
			x: area.xMin,
			y: area.yMin,
			width: 0,
			height: 0,
			rx: props.rx,
			ry: props.ry,
			fill: props.fill,
			selected: true,
			boundingBox: area
		}
	},
	update(area, rect) {
		rect.x = area.xMin;
		rect.y = area.yMin;
		rect.width = area.xMax - area.xMin;
		rect.height = area.yMax - area.yMin;
		rect.boundingBox = {
			xMin: area.xMin,
			xMax: area.xMax,
			yMin: area.yMin,
			yMax: area.yMax
		};
		return rect;
	},
	// update(x, y, rect) {
	// 	//if crossover is happening or rect was just created
	// 	if(rect.width <= 0) {
	// 		rect.width = 0;
	// 		rect.draggedLeft = false;
	// 		rect.draggedRight = false;
	// 	}
	// 	if(rect.height <= 0) {
	// 		rect.height = 0;
	// 		rect.draggedUp = false;
	// 		rect.draggedDown = false;
	// 	}
	// 	//if mouse is dragging to the left
	// 	if(x < rect.x) {
	// 		if(!rect.draggedLeft && !rect.draggedRight) {
	// 			rect.draggedLeft = true;
	// 		}
	// 		if(rect.draggedLeft) {
	// 			rect.width += (rect.x - x);
	// 			rect.x = x;
	// 		} else if(rect.draggedRight) {
	// 			rect.width -= (rect.x - x)
	// 			rect.x = x;
	// 		}
	// 	//if mouse is dragging to the right
	// 	} else if(x > rect.x) {
	// 		if(!rect.draggedLeft && !rect.draggedRight) {
	// 			rect.draggedRight = true;
	// 		}
	// 		if(rect.draggedRight) {
	// 			rect.width = x - rect.x
	// 		} else if(rect.draggedLeft) {
	// 			rect.width -= (x - rect.x);
	// 			rect.x = x;
	// 		}
	// 	}
	// 	if(rect.height <= 0) {
	// 		rect.height = 0;
	// 		rect.draggedUp = false;
	// 		rect.draggedDown = false;
	// 	}
	// 	//if mouse is dragging up
	// 	if(y < rect.y) {
	// 		if(!rect.draggedUp && !rect.draggedDown) {
	// 			rect.draggedUp = true;
	// 		}
	// 		if(rect.draggedUp) {
	// 			rect.height += (rect.y - y);
	// 			rect.y = y;
	// 		} else if(rect.draggedDown) {
	// 			rect.height = (y - rect.y)
	// 		}
	// 	}
	// 	//if mouse is dragging down
	// 	if(y > rect.y) {
	// 		if(!rect.draggedUp && !rect.draggedDown) {
	// 			rect.draggedDown = true;
	// 		}
	// 		if(rect.draggedDown) {
	// 			rect.height = (y - rect.y);
	// 		} else if(rect.draggedUp) {
	// 			rect.height -= (y - rect.y);
	// 			rect.y = y;
	// 		}
	// 	}
	// 	if(rect.width < 0) {
	// 		rect.width = 0;
	// 	}
	// 	if(rect.height < 0) {
	// 		rect.height = 0;
	// 	}
	// 	return rect;
	// },
	style(props) {
		console.log(props);
	}
};

export default rect;
