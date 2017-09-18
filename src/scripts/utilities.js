const utilities = {
	getDragArea(x, y, area) {
		x -= window.innerWidth * 0.1;
		if(!area) {
			area = {
				xMin: x,
				xMax: x,
				yMin: y,
				yMax: y
			}
		}
		if(area.xMin >= area.xMax) {
			area.draggedLeft = false;
			area.draggedRight = false;
		}
		if(area.yMin >= area.yMax) {
			area.draggedUp = false;
			area.draggedDown = false;
		}
		//if mouse is dragging to the left
		if(x < area.xMin) {
			if(!area.draggedLeft && !area.draggedRight) {
				area.draggedLeft = true;
			}
			if(area.draggedLeft) {
				area.xMin = x;
			} else if(area.draggedRight) {
				area.xMax = x;
			}
		//if mouse is dragging to the right
		} else if(x > area.xMin) {
			if(!area.draggedLeft && !area.draggedRight) {
				area.draggedRight = true;
			}
			if(area.draggedRight) {
				area.xMax = x;
			} else if(area.draggedLeft) {
				area.xMin = x;
			}
		}
		if(area.yMin >= area.yMax) {
			area.draggedUp = false;
			area.draggedDown = false;
		}
		//if mouse is dragging up
		if(y < area.yMin) {
			if(!area.draggedUp && !area.draggedDown) {
				area.draggedUp = true;
			}
			if(area.draggedUp) {
				area.yMin = y;
			} else if(area.draggedDown) {
				area.yMax = y;
			}
		}
		//if mouse is dragging down
		if(y > area.yMin) {
			if(!area.draggedUp && !area.draggedDown) {
				area.draggedDown = true;
			}
			if(area.draggedDown) {
				area.yMax = y;
			} else if(area.draggedUp) {
				area.yMin = y;
			}
		}
		return area;
	}
}

export default utilities;
