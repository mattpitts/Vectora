export default function getSVGCode(shapes) {
	let code = `<svg width="${window.innerWidth * 0.78}" height="${window.innerHeight * 0.995}" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">`
	let shapeString;
	let commonProps;
	shapes.forEach(shape => {
		switch(shape.type) {
			case 'rect':
				shapeString = ' <rect'
				+ ` x="${shape.x}"`
				+ ` y="${shape.y}"`
				+ ` width="${shape.width}"`
				+ ` height="${shape.height}"`;

				shapeString = concatCommonProps(shape, shapeString)
				+ '/>';
				code += shapeString;
				break;
			case 'circle':
				shapeString = ' <circle'
				+ ` cx="${shape.cx}"`
				+ ` cy="${shape.cy}"`
				+ ` r="${shape.r}"`;
				shapeString = concatCommonProps(shape, shapeString)
				+ '/>';
				code += shapeString;
				break;
			case 'path':
				shapeString = ' <path'
				+ ` d=${shape.d}`
				shapeString = concatCommonProps(shape, shapeString)
				+ '/>'
				code += shapeString;
				break;
			default:
				break

		}
	})
	code += ' </svg>'
	return code;
	function concatCommonProps(s, string) {
		string += ` fill="${s.fill}"`;
		string += ` stroke="${s.stroke}"`;
		string += ` stroke-width="${s.strokeWidth}"`;
		let translate = '';
		let rotate = '';
		let scale= '';
		if(s.translate) {
			translate = `${s.translate}`;
		}
		if(s.rotate) {
			rotate = ` ${s.rotate}`;
		}
		if(s.scale) {
			scale = ` ${s.scale}`;
		}
		if(translate.length >=1 || rotate.length >= 1 || scale.length >= 1) {
			string += ` transform="${translate} ${rotate} ${scale}"`
		}
		return string;
	}
}
