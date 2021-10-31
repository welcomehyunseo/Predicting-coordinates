class Polynomial {
    constructor() {

    }

    expression(x) {
        return x;
    }

    get_label(point_locations) {
        const x = point_locations[0];
        const y = point_locations[1];
        const x1 = point_locations[0];
        const y1 = this.expression(x);

        //console.log(x, y);
        //console.log(x1, y1);
        
        if(y1 > y) {
            return -1;
        } else {
            return 1;
        }
    }
}