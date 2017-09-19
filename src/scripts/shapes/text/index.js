const text = {
	create(coords, props) {
		return {
			type: 'text',
			selected: true,
			x: coords.x,
			y: coords.y,
			fontFamily: props.fontFamily,
			fontSize: props.fontSize,
			fill: props.fill,
			stroke: props.stroke,
			content: 'Doodoodoo'
		}
	}
}

export default text;
