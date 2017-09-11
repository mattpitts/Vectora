const shapes = {
	shapes: [
		{
			type: "circle",
			cx: '200',
			cy: '200',
			r: '200',
			fill: 'blue'
		},
		{
			type: "circle",
			cx: '600',
			cy: '200',
			r: '200',
			fill: 'yellow'
		},
		{
			type: "circle",
			cx: '400',
			cy: '200',
			r: '200',
			fill: 'red'
		},
		{
			type: 'rect',
			x: '400',
			y: '300',
			width: '200',
			height: '200',
			rx: '0',
			ry: '0',
			fill: 'teal'
		},
		{
			type: 'path',
			d: 'M 100 100 L 300 100 L 200 300 z',
			fill: 'none',
			stroke: 'black',
			strokeWidth: '9px'
		}
	],
	new: false
}


export default shapes;
