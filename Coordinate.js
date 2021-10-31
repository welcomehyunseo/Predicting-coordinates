class Coordinate {
    constructor(ctx, polynomial) {
        this.ctx = ctx;
        this.polynomial = polynomial;
        this.draw_plane();
    }

    draw_plane() {
        const img = new Image();   // Create new img element

        const draw_polynomial = () => {
            const expression = this.polynomial.expression;

            const left_point = new Point();
            const right_point = new Point();
            left_point.set_locations([-1, expression(-1)]);
            right_point.set_locations([1, expression(1)]);
            
            ctx.beginPath();
            ctx.moveTo(left_point.get_coordinate_locations()[0], left_point.get_coordinate_locations()[1]);
            ctx.lineTo(right_point.get_coordinate_locations()[0], right_point.get_coordinate_locations()[1]);
            ctx.stroke();
        }

        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            draw_polynomial();
        };
        img.src = 'coordinate_image.png';
    }



    put_dot(coordinate_locations) {
        const [coordinate_x, coordinate_y] = coordinate_locations;

        const r = 5;

        ctx.beginPath();
        ctx.arc(coordinate_x, coordinate_y, r, 0, Math.PI * 2, false); // Outer circle
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    }
}