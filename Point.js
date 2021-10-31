class Point {
    location = [0, 0];
    label = 1;

    constructor() {
        const get_randomInt_withInWidth = () => {
            const max = canvas.width;
            const min = 0;
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const get_randomInt_withInHeight = () => {
            const max = canvas.height;
            const min = 0;
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        this.location[0] = get_randomInt_withInWidth();
        this.location[1] = get_randomInt_withInHeight();

        //console.log('constructing the point -> ', this.location[0], this.location[1]);

        //In advance, set the label
        if (this.location[1] > this.location[0]) this.label = 1.00;
        else this.label = -1.00;
    }

    show_inCanvas(bool) {
        const x = this.location[0];
        const y = this.location[1];
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

    remarkable_show_inCanvas() {
        const x = this.location[0];
        const y = this.location[1];
        const r = 10;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, false); // Outer circle
        ctx.strokeStyle = '#0000FF';
        ctx.stroke();
    }
}