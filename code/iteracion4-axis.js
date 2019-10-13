function generateAxis(element, properties) {
    let axis_length = properties.axis_length;
    let axis_position = properties.axis_position;
    let axis_color = properties.axis_color;

    let tick_separation = properties.axis_tick_separation;
    let tick_length = properties.axis_tick_length;
    let tick_color = properties.axis_tick_color;

    let axis_negative = properties.axis_negative;
    let axis_negative_offset = 0;

    for (let axis of ['x', 'y', 'z']) {

        let line_end = {x: axis_position.x, y: axis_position.y, z: axis_position.z};
        line_end[axis] = axis_length + axis_position[axis];
        let line_start = {x: axis_position.x, y: axis_position.y, z: axis_position.z};

        if (axis_negative){
            axis_negative_offset = axis_length + 1;
            line_start[axis] = -axis_length + axis_position[axis];
        }
        ...
        for (let tick = tick_separation - axis_negative_offset; tick <= axis_length; tick += tick_separation) {
            ...
			if (axis === 'x') {
                tick_start = {x: axis_position.x + tick,         
							  y: axis_position.y - tick_length, 
							  z: axis_position.z};
                tick_end   = {x: axis_position.x + tick,         
							  y: axis_position.y + tick_length,  
							  z: axis_position.z};
            ...
        }
        element.appendChild(axis_line);
    }
}