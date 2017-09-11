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
	// update(x, y, rect) {
	// 	let newRect = rect;
	// 	if(x < rect.x) {
	// 		newRect.width = rect.width + rect.x - x;
	// 		newRect.x = x;
	// 	} else if(x > rect.x){
	// 		newRect.width = x - rect.x;
	// 	}
	// 	if(y < rect.y) {
	// 		newRect.height = rect.height + rect.y - y;
	// 		newRect.y = y;
	// 	} else if(y > rect.y){
	// 		newRect.height = y - rect.y;
	// 	}
	// 	return newRect;
	// },
	update(x, y, rect) {
		//if crossover is happening or rect was just created
		if(rect.width <= 0) {
			rect.width = 0;
			rect.draggedLeft = false;
			rect.draggedRight = false;
		}
		if(rect.height <= 0) {
			rect.height = 0;
			rect.draggedUp = false;
			rect.draggedDown = false;
		}
		//if mouse is dragging to the left
		if(x < rect.x) {
			if(!rect.draggedLeft && !rect.draggedRight) {
				rect.draggedLeft = true;
			}
			if(rect.draggedLeft) {
				rect.width += (rect.x - x);
				rect.x = x;
			} else if(rect.draggedRight) {
				rect.width -= (rect.x - x)
				rect.x = x;
			}
		//if mouse is dragging to the right
		} else if(x > rect.x) {
			if(!rect.draggedLeft && !rect.draggedRight) {
				rect.draggedRight = true;
			}
			if(rect.draggedRight) {
				rect.width = x - rect.x
			} else if(rect.draggedLeft) {
				rect.width -= (x - rect.x);
				rect.x = x;
			}
		}
		if(rect.height <= 0) {
			rect.height = 0;
			rect.draggedUp = false;
			rect.draggedDown = false;
		}
		//if mouse is dragging up
		if(y < rect.y) {
			if(!rect.draggedUp && !rect.draggedDown) {
				rect.draggedUp = true;
			}
			if(rect.draggedUp) {
				rect.height += (rect.y - y);
				rect.y = y;
			} else if(rect.draggedDown) {
				rect.height = (y - rect.y)
			}
		}
		//if mouse is dragging down
		if(y > rect.y) {
			if(!rect.draggedUp && !rect.draggedDown) {
				rect.draggedDown = true;
			}
			if(rect.draggedDown) {
				rect.height = (y - rect.y);
			} else if(rect.draggedUp) {
				rect.height -= (y - rect.y);
				rect.y = y;
			}
		}
		if(rect.width < 0) {
			rect.width = 0;
		}
		if(rect.height < 0) {
			rect.height = 0;
		}
		return rect;
	},
	style(props) {
		console.log(props);
	}
};

export default rect;


// if(y < rect.y) {
// 	rect.draggedDown = true;
// 	rect.height = rect.height + rect.y - y;
// 	rect.y = y;
// } else if(y > rect.y && !rect.draggedDown) {
// 	rect.draggedUp = true;
// 	rect.height = y - rect.y;
// }
