class Point {
    locations = [0, 0];

    constructor() {
        const get_random = (min, max) => { return Math.random() * (max - min) + min; }
        this.locations[0] = get_random(-1, 1);
        this.locations[1] = get_random(-1, 1);

        //console.log('constructing the point -> ', this.locations[0], this.locations[1]);
    }

    //Re-maps a number from one range to another.
    map_range = (value, low1, high1, low2, high2) => { return low2 + (high2 - low2) * (value - low1) / (high1 - low1); }

    //If want not randomly to set the point's location.
    //Below function was provided by according to the size of the canvas.
    set_locations_inCoordinate(coordinate_locations) {
        this.locations = [
            this.map_range(coordinate_locations[0], 0, canvas.width, -1, 1),
            this.map_range(coordinate_locations[1], canvas.height, 0, -1, 1)
        ]
    }

    set_locations(point_locations) {
        this.locations = point_locations;
        //console.log(point_locations);
    }

    get_coordinate_locations() {
        const coordinate_x = this.map_range(this.locations[0], -1, 1, 0, canvas.width);
        const coordinate_y = this.map_range(this.locations[1], -1, 1, canvas.height, 0);
        //console.table(coordinate_x, coordinate_y);
        return [coordinate_x, coordinate_y];
    }

    get_locations() {
        return this.locations;
    }

    show_inCanvas(bool) {
        const x = this.locations[0];
        const y = this.locations[1];
        const r = 5;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, false); // Outer circle
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        if (bool) {
            ctx.beginPath();
            ctx.arc(x, y, r - 2, 0, Math.PI * 2, true); // Outer circle
            ctx.fillStyle = '#00FF00';
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.arc(x, y, r - 2, 0, Math.PI * 2, true); // Outer circle
            ctx.fillStyle = '#FF0000';
            ctx.fill();
        }
    }

}