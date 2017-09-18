export default function getSVGCode(shapes) {
	let code = '<svg>';
	shapes.forEach(shape => {
		switch(shape.type) {
			case 'rect':
				let shapeString = '<rect';
				shapeString += ` x="${shape.x}"`;
				shapeString += ` y="${shape.y}"`;
				shapeString += ` width="${shape.width}"`;
				shapeString += ` height="${shape.height}"`;
				code += concatCommonProps(shape, shapeString)

		}
	})
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
