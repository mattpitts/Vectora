import path from './path';
import rect from './rect';
import circle from './circle';
import constructor from './constructor';
import selectedConstructor from './selectedConstructor';
import dragBox from './dragBox';
import getSelectedShape from './getSelectedShape';
import getSelectedIndex from './getSelectedIndex';
import resizeShape from './resizeShape';
import matchShapeToBoundingBox from './matchShapeToBoundingBox';
import moveShapeBoundingBox from './moveShapeBoundingBox';

const shapeUtilities = {
	path,
	rect,
	circle,
	constructor,
	selectedConstructor,
	dragBox,
	getSelectedShape,
	getSelectedIndex,
	resizeShape,
	matchShapeToBoundingBox,
	moveShapeBoundingBox
}

export default shapeUtilities;
