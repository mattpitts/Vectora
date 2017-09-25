# Vectora
[vectoradesign.com](https://vectoradesign.com)

#### About

Vectora is a simple SVG editor built with React and Redux. Users can use mouse movement to create basic SVG shapes
and select fill and border colors with a color picker. Current supported shapes are rectangles, circles, ellipses, and paths.
All shapes can be repositioned by selecting them and dragging them to the new desired location. Shapes can be resized by
selecting them and dragging one of the 8 nodes that appear as part of their bounding box. A layer tool allows users to move shapes forward or backwards relative to other shapes. The delete key will delete shapes. The <svg> code representing a user's creation can be seen and copied by hitting the Export button. Logged in users have the option of naming and saving their current creation for later viewing/editing/exporting.

#### Planned Features

* Shape rotation
* Text support and font imports
* Polygon tool
* Adjustable size for art board
* Shape grouping
* Arrow key support for repositioning shapes
* Undo and redo capability and associated hotkey support

#### Known issues

* Shapes become unselected when a resize action is finished, depending on the direction of drag.
* Path resizing is currently very weird. I am utilizing transforms to get resizing to work, and the resizing does not match the
computed bounding box for the resized shape. I considered disabling the feature until I have more time to find a better approach, but left it as is because it is kind of funny to see it in action and it technically gives the user more control.

#### Technologies used

* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reactjs/redux)
* [React-Color](https://github.com/casesandberg/react-color)
