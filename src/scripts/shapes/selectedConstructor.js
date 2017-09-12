import constructor from './constructor';
import getShapeBounds from '../utilities';

export default function selectedConstructor(shape, i) {
	let shapeBounds = getShapeBounds(shape);
	let constructedShape = constructor(shape, i);
	return shape;
}
